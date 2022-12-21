import React from "react";
import { FormikProps } from "formik";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
  label: string;
  name: string;
}

const FormikInput: React.FC<InputProps> = ({
  formik,
  label,
  name,
  placeholder = ``,
  required,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="pl-2 font-semibold text-skin-muted">
        {label}
        {required && (
          <span className={formik.errors[name] && `!text-rose-600`}>*</span>
        )}
      </label>
      <input
        {...inputProps}
        name={name}
        placeholder={placeholder}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className={`rounded-full border bg-skin-base px-5 py-3 tracking-tight text-skin-base outline-none placeholder:text-skin-muted focus:ring-0  ${
          formik.errors[name] && formik.touched[name]
            ? `!border-rose-600 focus:!ring-rose-600`
            : `border-skin-base focus:border-skin-accent `
        } `}
      />
      {formik.errors[name] && formik.touched[name] && (
        <p className="pl-2 text-sm font-medium text-rose-600">
          {formik.errors[name]?.toString()}
        </p>
      )}
    </div>
  );
};

export default FormikInput;
