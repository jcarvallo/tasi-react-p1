import axios from "axios";

const setToken = (token) => localStorage.setItem("token", token);

const getToken = () => localStorage.getItem("token");

const config = axios.create({ baseURL: process.env.REACT_APP_API_USERS });

const method = {
  get: "GET",
  post: "POST",
  put: "PUT",
  delete: "DELETE",
};

config.interceptors.request.use(
  (req) => {
    if (req.url !== "authentication") {
      req.headers = { Authorization: `Bearer ${getToken()}` };
    }
    return req;
  },
  (error) => Promise.reject(error)
);
config.interceptors.response.use(
  (res) => {
    if (res.config.url === "authentication" && res.data.token) {
      setToken(res.data.token);
    }
    return res;
  },
  (error) => Promise.reject(error)
);

export { config, method };
