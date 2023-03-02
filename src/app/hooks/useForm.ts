import type { FormEvent} from 'react';
import { useState } from 'react';
import type { AnyZodObject, ZodError } from 'zod';
import getStructuredZodError from '../utils/getStructuredZodErrors';

interface IUseForm<T> {
  initialValue: T;
  onSubmit(value: T): void;
  onReset?(): void;
  vSchema?: AnyZodObject;
}

export const useForm = <T extends Record<string, unknown>>({
  initialValue,
  onSubmit,
  onReset,
  vSchema,
}: IUseForm<T>) => {
  const [values, setValues] = useState<T>(initialValue);
  const [errors, setErrors] = useState<T>(initialValue);

  function validateForm() {
    try {
      const validValues = vSchema?.parse(values) as T;
      setValues(validValues);
    } catch (error) {
      const structuredErrors = getStructuredZodError(error as ZodError);
      setErrors(structuredErrors as T);
    }
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    validateForm();
    onSubmit(values);
  }

  function handleReset() {
    setValues(initialValue);
    if (onReset) onReset();
  }

  function handleBlur() {
    validateForm();
  }

  function handleChange(e: FormEvent<HTMLInputElement>) {
    setValues((v) => {
      return {
        ...v,
        [e.currentTarget.name]: e.currentTarget.value,
      };
    });
  }

  return {
    values,
    errors,
    handleSubmit,
    handleReset,
    handleChange,
    handleBlur,
  };
};
