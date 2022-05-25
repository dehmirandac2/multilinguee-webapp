import * as yup from 'yup';

export const schema: yup.AnyObjectSchema = yup.object().shape({
  about: yup.string().required(),
  languages: yup.array().required(),
  // surname: yup.string().required(),
  // email: yup.string().email().required(),
  // type: yup.string().required(),
  // password: yup.string().min(8).max(32).required(),
});
