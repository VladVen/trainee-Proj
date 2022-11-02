import { InferActionType } from '../store';
import { usersActions } from './actions';
import { commonUserType } from '../CommonDataTypes/types';
import { CLEAR_CURRENT_USER, CLEAR_USERS, GET_CURRENT_USER, GET_USERS, LOG_OUT } from './actionTypes';

const initialState = {
  users: {
    pagination: {
      skip: null as number | null,
      limit: null as number | null,
      total: null as number | null,
    },
    data: [] as commonUserType[],
  },
  currentUser: null as commonUserType | null,
};

type initialStateType = typeof initialState;

export type ActionsType = InferActionType<typeof usersActions>;

export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: {
          ...state.users,
          pagination: {
            ...state.users.pagination,
            skip: action.payload.users.pagination.skip,
            limit: action.payload.users.pagination.limit,
            total: action.payload.users.pagination.total,
          },
          data: [...state.users.data, ...action.payload.users.data],
        },
      };
    case GET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user,
      };
    case CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: null,
      };
    case CLEAR_USERS:
    case LOG_OUT:
      return {
        ...state,
        users: {
          ...state.users,
          pagination: {
            skip: null,
            limit: null,
            total: null,
          },
          data: [],
        },
      };
    default:
      return state;
  }
};
