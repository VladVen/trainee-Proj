import { instance } from '../api';

export const usersAPI = {
  getUsers(startValue: number) {
    return instance.get(`users?limit=10&skip=${startValue}`).then((response) => response.data);
  },
  getCurrentUser(id: string) {
    return instance.get(`users/${id}`).then((response) => response.data);
  },
};
