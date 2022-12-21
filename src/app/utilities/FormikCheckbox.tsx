import React from "react";
import type { FormikProps } from "formik";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  formik: FormikProps<any>;
  name: string;
  type?: "checkbox";
  label: string;
}

const FormikCheckbox: React.FC<Props> = ({
  formik,
  name,
  label,
  ...inputProps
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        name={name}
        value={formik.values[name]}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        className="h-5 w-5 rounded-md border-2 border-skin-accent text-skin-accent focus:ring-skin-base"
        {...inputProps}
      />
      <label
        htmlFor={name}
        className="font-medium tracking-tight text-skin-accent"
      >
        {label}
      </label>
    </div>
  );
};

export default FormikCheckbox;
