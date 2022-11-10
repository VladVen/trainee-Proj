import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://front-test.dev.aviasales.ru/',
  headers: {
    'Content-Type': 'application/json',
  },
});


