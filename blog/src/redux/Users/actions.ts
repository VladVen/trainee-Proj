import { commonUserType, usersResponseType } from '../CommonDataTypes/types';
import { CLEAR_CURRENT_USER, CLEAR_USERS, GET_CURRENT_USER, GET_USERS, LOG_OUT } from './actionTypes';

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
  getCurrentUser: (user: commonUserType) =>
    ({
      type: GET_CURRENT_USER,
      payload: { user },
    } as const),
  clearCurrentUser: () =>
    ({
      type: CLEAR_CURRENT_USER,
    } as const),
  logout: () =>
    ({
      type: LOG_OUT,
    } as const),
};
