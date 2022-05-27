import * as yup from 'yup';

export const schema: yup.AnyObjectSchema = yup.object().shape({
  about: yup.string().required(),
  languages: yup.array().required(),
  classDays: yup.object().required(),
});
