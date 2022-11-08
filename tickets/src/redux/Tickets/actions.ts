import { SET_SEARCH_ID, SET_TICKETS } from "./actionTypes";
import { TicketsResponseType } from "../Types/types";

export const ticketsActions = {
  setSearchId: (id: string) =>
    ({
      type: SET_SEARCH_ID,
      payload: { id },
    } as const),
  setTickets: (tickets: TicketsResponseType) =>
    ({
      type: SET_TICKETS,
      payload: { tickets },
    } as const),
};
