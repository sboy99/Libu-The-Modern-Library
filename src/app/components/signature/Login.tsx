import { BoltIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import { useApi } from '@/app/store';
import { loginUser } from '@/app/store/api/authentication';
import { useEffect } from 'react';
import Styles from '../../../css/utils.module.css';
import loginSchema from '../../schemas/login';
import { Actions } from '../../store/features';
import type { TLoginPayload } from '../../types/authentication';
import { FormikCheckbox, FormikInput } from '../utilities';
import Headline from './Headline';

const Login = () => {
  const { isFormLoading, response } = useApi();
  const dispatch = useDispatch();

  const closeForm = () => {
    dispatch(Actions.closeSignForm());
  };

  const changeForm = () => {
    dispatch(Actions.setSignatureOption('register'));
  };

  const initialValues: TLoginPayload = {
    email: ``,
    password: ``,
    rememberMe: false,
  };

  const onSubmit = (values: TLoginPayload) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dispatch(loginUser(values) as any);
  };

  const formik = useFormik<TLoginPayload>({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
    validateOnBlur: true,
  });

  useEffect(() => {
    if (response.type && response.type === 'success') {
      closeForm();
    }
  }, [response.type]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative mx-auto flex max-w-xs flex-col gap-2 pt-2 "
    >
      <Headline
        Icon={BoltIcon}
        title={`Login`}
        desc={`Your boookshelf is waiting for you. Log in now! `}
      />
      <FormikInput
        formik={formik}
        label="Email"
        name="email"
        type="email"
        placeholder="user@website.com"
        autoComplete="off"
        autoFocus
        required
      />
      <FormikInput
        formik={formik}
        label="Password"
        name="password"
        type="password"
        placeholder="Min 6 character"
        required
      />
      <div className="my-2 grid grid-cols-2 gap-4">
        <FormikCheckbox formik={formik} label="Remember Me" name="rememberMe" />
        <div className="cursor-pointer whitespace-nowrap px-4 font-medium tracking-tight text-skin-accent hover:text-skin-accent-hover">
          Forgot Password?
        </div>
      </div>

      {/* actions */}
      <div className="my-2 flex items-center justify-end gap-2">
        <button
          type="submit"
          className={`${Styles['btn']} ${Styles['submit-btn']} !w-full py-3 ${
            isFormLoading && 'opacity-75'
          }`}
        >
          {isFormLoading ? 'Stay Tuned...' : 'Log In'}
        </button>
      </div>

      {/* don't have account -> sign up */}
      <button
        type="button"
        onClick={changeForm}
        className="mt-6 pt-2 font-medium text-skin-base"
      >
        New Here?{' '}
        <span className="font-semibold capitalize text-skin-accent outline-none">
          create an account
        </span>
      </button>

      {/* close button */}
      <button
        type="button"
        onClick={closeForm}
        className={`absolute top-1 -right-3 rounded-full p-3 font-medium text-skin-muted hover:bg-skin-muted`}
      >
        <XMarkIcon className="h-7 w-7" />
      </button>
    </form>
  );
};

export default Login;
