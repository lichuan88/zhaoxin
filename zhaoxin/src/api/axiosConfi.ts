import axios from "axios";
const baseURL = "/api"
const axiosConfig = {
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    token: "",
  },
  timeout: 100 * 30,
};
export const axiosInstances = axios.create(axiosConfig);