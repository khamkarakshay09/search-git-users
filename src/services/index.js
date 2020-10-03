import axios from "axios";
import notification from "../helper/toaster.helper";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    notification({ type: "warn", message: "Something went wrong!" });
    return Promise.reject(error);
  }
);

export default axiosInstance;
