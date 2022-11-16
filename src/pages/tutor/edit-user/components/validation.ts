import * as yup from 'yup';

export const schema: yup.AnyObjectSchema = yup.object().shape({
  surname: yup.string().required(),
  email: yup.string().email().required(),
  name: yup.string().required(),
});
