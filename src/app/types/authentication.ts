import type * as yup from 'yup';

import type loginSchema from '../schemas/login';
import type registerSchema from '../schemas/register';

export type TLoginPayload = yup.InferType<typeof loginSchema>;
export type TRegisterPayload = yup.InferType<typeof registerSchema>;
