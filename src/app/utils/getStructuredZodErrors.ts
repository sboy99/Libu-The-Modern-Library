import type { ZodError } from 'zod';

const getStructuredZodError = (err: ZodError): Record<string, string> => {
  const strtuctedErrorObj: Record<string, string> = {};
  for (const e of err.errors) {
    const field = e.path[0];
    strtuctedErrorObj[field] = e.message;
  }
  return strtuctedErrorObj;
};

export default getStructuredZodError;
