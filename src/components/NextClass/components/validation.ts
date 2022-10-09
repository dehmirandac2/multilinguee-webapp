import * as yup from 'yup';

export const schema: yup.AnyObjectSchema = yup.object().shape({
  init: yup.string().required(),
  end: yup.string().required(),
  topic: yup.string().required(),
});
