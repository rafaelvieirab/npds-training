import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:8080/api"
})

const token = localStorage.getItem("@events-npds/token");

function onGetCall(config) {
  const isAuthenticate = config.url.includes("login") || config.url.includes("signup") || config.url.includes("authenticate")
  return !isAuthenticate;
}

api.interceptors.request.use(config => {
  config.headers.Authorization = `Bearer ${token}`;
  return config;
}, null,
  {
    runWhen: onGetCall
  }
);

export default api;