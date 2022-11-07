import axios from 'axios';

export const instance = axios.create({
  baseURL: 'http://test-blog-api.ficuslife.com/api/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

instance.interceptors.request.use((config) => {
  if (!config) {
    config = {};
  }
  if (!config.headers) {
    config.headers = {};
  }
  if (sessionStorage.getItem('token')) {
    config.headers['Authorization'] = 'Bearer ' + sessionStorage.getItem('token');
  }
  return config;
});
