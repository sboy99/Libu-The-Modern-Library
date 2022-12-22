export type LoginCred = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export type RegisterCred = {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeTermsAndConditions: boolean;
};
