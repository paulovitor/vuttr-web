import axios from "axios";

const http = axios.create({
  baseURL: process.env.VUE_APP_API_ENDPOINT,
});

http.interceptors.request.use((config) => {
  config.headers["Authorization"] = `Bearer ${getToken()}`;
  return config;
});

function getToken() {
  return "";
}

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
