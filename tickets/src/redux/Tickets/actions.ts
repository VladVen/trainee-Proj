import { SET_SEARCH_ID, SET_TICKETS } from "./actionTypes";
import { commonTicketType } from "../Types/types";

export const ticketsActions = {
  setSearchId: (id: string) =>
    ({
      type: SET_SEARCH_ID,
      payload: { id },
    } as const),
  setTickets: (tickets: commonTicketType[]) =>
    ({
      type: SET_TICKETS,
      payload: { tickets },
    } as const),
};
