import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

const token = localStorage.getItem('@events-npds/token');

api.interceptors.request.use(config => {
  if(!(config.url.includes('login') || config.url.includes('signup') || config.url.includes('authenticate'))) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;