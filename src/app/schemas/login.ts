import * as yup from 'yup';

const loginSchema = yup.object({
  email: yup
    .string()
    .strict(true)
    .required(`Email is required`)
    .email(`Provide a valid email`),
  password: yup.string().required(`Password is required`),
  rememberMe: yup.boolean().default(false),
});

export default loginSchema;
