import { yupResolver } from '@hookform/resolvers/yup';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '../../components/global/Button';
import { Input } from '../../components/global/Input';
import { useAuth } from '../../context/authContext';
import { withAuthentication } from '../../helpers/withAuthentication';
import { loginSchema, loginSchemaProps } from '../../validations/login.validation';
import styles from './styles.module.scss';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<loginSchemaProps>({
    resolver: yupResolver(loginSchema),
  });

  const { signIn } = useAuth();

  const onSubmit = (data: loginSchemaProps) => signIn(data);

  return (
    <div className={styles.body}>
      <form className={styles.body__form} onSubmit={handleSubmit(onSubmit)}>
        <Image
          src={"/icons/prefeitura-logo-logo.svg"}
          alt={"Logo parnamirim"}
          width={96.86}
          height={97.01}
        />
        <strong>Revista Vivências</strong>
        <p>Prefeitura Municipal de Parnamirim</p>

        <div className={styles.body__input_container}>
          <Input
            inputType="filled"
            type="text"
            placeholder="Login"
            {...register("login")}
            error={errors.login?.message}
          />
          <Input
            type="password"
            inputType="filled"
            placeholder="Senha"
            {...register("password")}
            error={errors.password?.message}
          />
        </div>

        <div style={{ width: "80%" }}>
          <Button colorType="black">Entrar</Button>
        </div>
      </form>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = withAuthentication(
  async () => {
    return {
      props: {},
    };
  }
);

export default Login;
