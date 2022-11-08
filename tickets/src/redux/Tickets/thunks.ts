import {CommonThunkType} from "../store";
import {ActionsType} from "./reducer";
import {ticketsAPI} from "../../API/ticketsAPI/ticketsAPI";
import {ticketsActions} from "./actions";

export type ThunkType = CommonThunkType<ActionsType>;

export const getSearchId = (): ThunkType => async (dispatch) => {
    try {
        let data = await ticketsAPI.getSearchId();
        dispatch(ticketsActions.setSearchId(data.searchId));
    } catch (e) {
        console.log(e);
    }
};
export const getTickets = (searchId: string): ThunkType => async (dispatch) => {
    try {
        let tickets = await ticketsAPI.getTickets(searchId);
        dispatch(ticketsActions.setTickets(tickets));
    } catch (e) {
        console.log(e);
    }
};