import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next';
import { parseCookies } from 'nookies';

import { TOKEN_VARIABLE } from '../constants/cookies.variables';

export const withAuthentication = <P extends {}>(
  fn: GetServerSideProps<P>
): GetServerSideProps => {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx);
    const token = cookies[TOKEN_VARIABLE];
    try {
      if (ctx.resolvedUrl == "/login" && token) {
        return {
          redirect: {
            destination: "/gerenciador",
            permanent: false,
          },
        };
      }

      if (!token) {
        if (ctx.resolvedUrl == "/login") {
          return await fn(ctx);
        }

        return {
          redirect: {
            destination: "/",
            permanent: false,
          },
        };
      }

      return await fn(ctx);
    } catch (err) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
  };
};
