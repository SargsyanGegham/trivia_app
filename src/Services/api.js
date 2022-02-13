import axios from "axios";
import { BASE_URL } from "./api.constants";

export const appClient = axios.create({
  baseURL: BASE_URL,
})