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
  if (localStorage.getItem('token')) {
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token');
  }
  return config;
});
