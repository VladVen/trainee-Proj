import { instance } from '../api';

export const ticketsAPI = {

  getSearchId() {
    return instance.get(`search`).then((response) => response.data);
  },
  getTickets(id: string) {
    return instance.get(`tickets?searchId=${id}`).then((response) => response.data);
  },

};
