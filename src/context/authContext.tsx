import Router, { useRouter } from 'next/router';
import { destroyCookie, parseCookies, setCookie } from 'nookies';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { TOKEN_VARIABLE } from '../constants/cookies.variables';
import { Api } from '../services/api';

type UserProps = {
  id: number;
  name: string;
};

type SignInCredentialsProps = {
  login: string;
  password: string;
};

type AuthContextType = {
  signIn: (credentials: SignInCredentialsProps) => Promise<void>;
  signOut: () => void;
  user?: UserProps;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

let authChannel: BroadcastChannel;

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();
  const [user, setUser] = useState<UserProps>();

  useEffect(() => {
    authChannel = new BroadcastChannel("auth");

    authChannel.onmessage = (message) => {
      switch (message.data) {
        case "signOut":
          destroyCookie(undefined, TOKEN_VARIABLE);
          Router.push("/");
          break;
        default:
          break;
      }
    };
  }, []);

  useEffect(() => {
    const cookies = parseCookies();
    const token = cookies[TOKEN_VARIABLE];

    if (token) {
      Api()
        .get("/auth/me")
        .then((res) => {
          const {
            data: { id, name },
          } = res.data;
          setUser({ id, name });
        })
        .catch((_) => {
          signOut();
        });
    }
  }, []);

  const signIn = async ({ login, password }: SignInCredentialsProps) => {
    try {
      const res = await Api().post("/auth/sign-in", { login, password });

      const {
        data: { id, name, token },
      } = res.data;

      setUser({
        id,
        name,
      });

      setCookie(undefined, TOKEN_VARIABLE, token, {
        maxAge: 60 * 60 * 24, // 1 days
        path: "/",
      });

      Api().defaults.headers.common["Authorization"] = `Bearer ${token}`;

      router.push("/gerenciador");
    } catch (error) {
      const err = error as {
        code: string;
        response: { data: { message: string } };
      };
      if (err.code == "ERR_BAD_REQUEST")
        toast.warning(err.response.data.message);
      else toast.warning("Houve um erro inesperado.");
    }
  };

  const signOut = () => {
    destroyCookie(undefined, TOKEN_VARIABLE);
    authChannel.postMessage("signOut");
    setUser(undefined);
    Router.push("/");
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
