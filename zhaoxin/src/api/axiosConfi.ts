import axios from "axios";
const baseURL = "http://43.139.117.216:8100";
const axiosConfig = {
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    token: "",
  },
  timeout: 100 * 30,
};
export const axiosInstances = axios.create(axiosConfig);

