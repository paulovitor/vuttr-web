import axios from "axios";
import { getInstance } from "../auth/authWrapper";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

http.interceptors.request.use(async (config) => {
  const authService = getInstance();

  const token = await authService.getTokenSilently({
    audience: process.env.VUE_APP_AUTH0_AUDIENCE,
    scope: "create:tools delete:tools",
  });

  console.log(token);

  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

const RESOURCE_NAME = "/tools";

export default {
  getAll() {
    return http.get(RESOURCE_NAME);
  },
  get(id) {
    return http.get(`${RESOURCE_NAME}/${id}`);
  },
  create(data) {
    return http.post(RESOURCE_NAME, data);
  },
  delete(id) {
    return http.delete(`${RESOURCE_NAME}/${id}`);
  },
};
