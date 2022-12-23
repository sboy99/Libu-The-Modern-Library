import { FireIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useFormik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";

import Styles from "../../../css/utils.module.css";
import registerSchema from "../../schemas/register";
import { Actions } from "../../store/features";
import type { RegisterCred } from "../../types/authentication";
import { FormikCheckbox, FormikInput } from "../../utilities";
import Headline from "./Headline";

const Register = () => {
  const dispatch = useDispatch();
  const closeForm = () => {
    dispatch(Actions.closeSignForm());
  };

  const changeForm = () => {
    dispatch(Actions.setSignatureOption("login"));
  };

  const initialValues: RegisterCred = {
    userName: ``,
    email: ``,
    password: ``,
    confirmPassword: ``,
    agreeTermsAndConditions: false,
  };

  const onSubmit = (values: RegisterCred) => {
    console.log(values);
  };

  const formik = useFormik<RegisterCred>({
    initialValues,
    onSubmit,
    validationSchema: registerSchema,
    validateOnBlur: true,
  });

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
        name="userName"
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
          className={`${Styles["btn"]} ${Styles["submit-btn"]} !w-full py-3`}
        >
          Create
        </button>
      </div>

      {/* don't have account -> sign up */}
      <button
        type="button"
        onClick={changeForm}
        className="mt-6 pt-2 font-medium text-skin-base"
      >
        Having an account?{" "}
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
