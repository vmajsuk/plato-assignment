import { object, string } from "yup";

const schema = object({
  REACT_APP_API_BASE_URL: string().required(),
});

const env = schema.validateSync(process.env, { abortEarly: false });

export const config = {
  api: { baseUrl: env.REACT_APP_API_BASE_URL },
};
