import React from "react";
import type { LoginCred } from "../../types/login";
import { useFormik } from "formik";
import loginSchema from "../../schemas/login";
import { FormikInput, FormikCheckbox } from "../../utilities";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/features";
import Styles from "../../../css/utils.module.css";
import Headline from "./Headline";
import { BoltIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Login = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(Actions.closeSignForm());
  };

  const changeForm = () => {
    dispatch(Actions.setSignatureOption("register"));
  };

  const initialValues: LoginCred = {
    email: ``,
    password: ``,
    rememberMe: false,
  };

  const onSubmit = (values: LoginCred) => {
    console.log(values);
  };

  const formik = useFormik<LoginCred>({
    initialValues,
    onSubmit,
    validationSchema: loginSchema,
    validateOnBlur: true,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="relative mx-auto flex max-w-sm flex-col gap-2 pt-2 "
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
        required
      />
      <div className="my-2 flex flex-wrap-reverse items-center justify-between gap-4">
        <FormikCheckbox formik={formik} label="Remember Me" name="rememberMe" />
        <div className="cursor-pointer px-4 font-medium tracking-tight text-skin-accent hover:text-skin-accent-hover">
          Forgot Password?
        </div>
      </div>

      {/* actions */}
      <div className="my-2 flex items-center justify-end gap-2">
        <button
          type="submit"
          className={`${Styles["btn"]} ${Styles["submit-btn"]} !w-full py-3`}
        >
          Submit
        </button>
      </div>

      {/* don't have account -> sign up */}
      <div className="mt-8 font-medium text-skin-base">
        New Here?{" "}
        <button
          type="button"
          onClick={changeForm}
          className="font-semibold capitalize text-skin-accent outline-none"
        >
          create an account
        </button>
      </div>

      {/* close button */}
      <button
        type="button"
        onClick={closeForm}
        className={`absolute top-4 right-0 font-medium text-skin-muted`}
      >
        <XMarkIcon className="h-7 w-7" />
      </button>
    </form>
  );
};

export default Login;
