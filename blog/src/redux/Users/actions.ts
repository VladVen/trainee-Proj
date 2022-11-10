import { usersResponseType } from '../CommonDataTypes/types';
import { CLEAR_USERS, GET_USERS, LOG_OUT } from './actionTypes';

export const usersActions = {
  getUsers: (users: usersResponseType) =>
    ({
      type: GET_USERS,
      payload: { users },
    } as const),
  clearUsers: () =>
    ({
      type: CLEAR_USERS,
    } as const),
  logout: () =>
    ({
      type: LOG_OUT,
    } as const),
};
