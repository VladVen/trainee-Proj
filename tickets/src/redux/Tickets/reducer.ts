import { InferActionType } from "../store";
import { ticketsActions } from "./actions";
import { SET_SEARCH_ID, SET_TICKETS } from "./actionTypes";
import { TicketsResponseType } from "../Types/types";

const initialState = {
  tickets: null as TicketsResponseType | null,
  searchId: null as string | null,
  error: null as string | null,
};

type initialStateType = typeof initialState;

export type ActionsType = InferActionType<typeof ticketsActions>;

export const ticketsReducer = (state = initialState, action: ActionsType): initialStateType => {
  switch (action.type) {
    case SET_SEARCH_ID:
      return {
        ...state,
        searchId: action.payload.id,
      };
    case SET_TICKETS:
      return {
        ...state,
        tickets: action.payload.tickets,
      };
    default:
      return state;
  }
};
