import * as yup from 'yup';

export interface loginSchemaProps {
  login: string;
  password: string;
}

export const loginSchema = yup.object().shape({
  login: yup.string().required("Campo obrigatório."),
  password: yup.string().required("Campo obrigatório."),
});
