/* eslint-disable @typescript-eslint/no-explicit-any */
import type { TRegisterPayload } from '@/app/types/authentication';

import { FormikCheckbox, FormikInput } from '@/app/components/utilities';
import registerSchema from '@/app/schemas/register';
import { useApi } from '@/app/store';
import { registerUser } from '@/app/store/api/authentication';
import { Actions } from '@/app/store/features';
import Styles from '@/css/utils.module.css';
import { FireIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Headline from './Headline';

const Register = () => {
  const { isFormLoading, response } = useApi();
  const dispatch = useDispatch();

  const closeForm = () => {
    dispatch(Actions.closeSignForm());
  };

  const changeForm = () => {
    dispatch(Actions.setSignatureOption('login'));
  };

  const initialValues: TRegisterPayload = {
    name: ``,
    email: ``,
    password: ``,
    confirmPassword: ``,
    agreeTermsAndConditions: false,
  };

  const onSubmit = (values: TRegisterPayload) => {
    dispatch(registerUser(values) as any);
  };

  const formik = useFormik<TRegisterPayload>({
    initialValues,
    onSubmit,
    validationSchema: registerSchema,
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
        Icon={FireIcon}
        title={`Sign Up`}
        desc={`Create a public accound to sync your progress`}
      />
      <FormikInput
        formik={formik}
        label="Full Name"
        name="name"
        type="text"
        placeholder="Your Name"
        autoComplete="off"
        autoFocus
        required
      />
      <FormikInput
        formik={formik}
        label="Email"
        name="email"
        type="email"
        placeholder="user@website.com"
        autoComplete="off"
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
      <FormikInput
        formik={formik}
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        required
      />
      <div className="my-2">
        <FormikCheckbox
          formik={formik}
          label="Agree Terms & Conditions"
          name="agreeTermsAndConditions"
        />
      </div>

      {/* actions */}
      <div className="my-2 flex items-center justify-end gap-2">
        <button
          type="submit"
          disabled={isFormLoading}
          className={`${Styles['btn']} ${Styles['submit-btn']} !w-full py-3 ${
            isFormLoading && 'opacity-50'
          }`}
        >
          {isFormLoading ? 'Signing..' : 'Sign In'}
        </button>
      </div>

      {/* don't have account -> sign up */}
      <button
        type="button"
        onClick={changeForm}
        className="mt-6 pt-2 font-medium text-skin-base"
      >
        Having an account?{' '}
        <span className="font-semibold capitalize text-skin-accent outline-none">
          Log in
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

export default Register;
