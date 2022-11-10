import { CommonThunkType } from '../store';
import { usersActions } from './actions';
import { ActionsType } from './reducer';
import { usersAPI } from '../../API/usersAPI/usersAPI';

export type ThunkType = CommonThunkType<ActionsType>;

export const getUsers =
  (startValue: number): ThunkType =>
  async (dispatch) => {
    try {
      let users = await usersAPI.getUsers(startValue);
      dispatch(usersActions.getUsers(users));
    } catch (e) {
      console.log(e);
    }
  };

export const getCurrentUser =
  (id: string): ThunkType =>
  async (dispatch) => {
    try {
      let user = await usersAPI.getCurrentUser(id);
      dispatch(usersActions.getCurrentUser(user));
    } catch (e) {
      console.log(e);
    }
  };
