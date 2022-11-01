import { instance } from '../api';
import { createAccountType, updateAccountType } from '../../redux/CommonDataTypes/types';

export const loginAPI = {
  logIn(email: string, password: string) {
    return instance
      .post('auth', { email, password })
      .then((response) => localStorage.setItem('token', response.data.token));
  },

  createAccount(values: createAccountType) {
    return instance.post(`/users`, { ...values }).then((response) => response.data);
  },
  getProfile() {
    return instance.get(`auth/user`).then((response) => response.data);
  },
  deleteProfile(id: string) {
    return instance.delete(`/users/${id}`);
  },
  updateProfile(values: updateAccountType, id: string) {
    return instance.patch(`/users/${id}`, { ...values }).then((response) => response.data);
  },
};
