import axios from "axios";
import { config } from "~/config";

export const client = axios.create({ baseURL: config.api.baseUrl });

export async function wait(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}
