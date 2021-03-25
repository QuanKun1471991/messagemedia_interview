import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/`,
  params: {
    api_key: process.env.REACT_APP_API_KEY,
  },
});

instance.interceptors.request.use(
  (config) => {
    return {
      ...config,
      params: {
        ...config.params,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
