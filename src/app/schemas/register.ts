import * as yup from 'yup';

const registerSchema = yup.object({
  name: yup
    .string()
    .required(`Name is required`)
    .min(2, `Minimum length should be 2`)
    .max(50, `Maximum length should be 50`),
  email: yup
    .string()
    .required(`Email is required`)
    .email(`Provide a valid email`),
  password: yup.string().required(`Password is required`),
  confirmPassword: yup
    .string()
    .required(`Please confirm your password`)
    .when('password', {
      is: (password: string) =>
        password && password.length > 0 ? true : false,
      then: yup
        .string()
        .oneOf([yup.ref('password')], `Password does not match`),
    }),
  agreeTermsAndConditions: yup.boolean().required(),
});

export default registerSchema;
