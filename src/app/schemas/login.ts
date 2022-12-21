import * as yup from "yup";

const loginSchema = yup.object({
  email: yup
    .string()
    .required(`Email is required`)
    .email(`Provide a valid email`),
  password: yup.string().required(`Password is required`),
});

export default loginSchema;
