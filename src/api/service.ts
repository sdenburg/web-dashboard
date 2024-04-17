import axios from "axios";

axios.interceptors.request.use(
  (config) => {
    config.headers["Authorization"] = "testtoken";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const BASE_URL = "http://testsite.com";

export const getResults = async () => {
  return axios
    .get(`${BASE_URL}/results`)
    .catch((reason) => console.error("API ERROR: " + reason));
};
