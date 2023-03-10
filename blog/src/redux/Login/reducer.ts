import { InferActionType } from '../store';
import { CATCH_ERROR, CLEAR_ERROR, LOG_OUT, SET_AUTH } from './actionTypes';
import { loginActions } from './actions';
import { commonUserType } from '../CommonDataTypes/types';

const initialState = {
  authData: null as commonUserType | null,
  error: null as string | null,
};

type initialStateType = typeof initialState;

export type ActionsType = InferActionType<typeof loginActions>;

export const authReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case SET_AUTH:
      return {
        ...state,
        authData: action.payload.authData,
      };
    case CATCH_ERROR:
      return {
        ...state,
        error: action.payload.error,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    case LOG_OUT:
      return {
        ...state,
        authData: null,
        error: null,
      };
    default:
      return state;
  }
};
