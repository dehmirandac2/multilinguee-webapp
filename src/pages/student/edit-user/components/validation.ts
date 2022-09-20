import * as yup from 'yup';

export const schema: yup.AnyObjectSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  email: yup.string().email().required(),
  type: yup.string().required(),
  password: yup.string().min(8).max(32).required(),
});
