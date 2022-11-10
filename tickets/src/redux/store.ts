import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk, {ThunkAction} from "redux-thunk";
import {ticketsReducer} from "./Tickets/reducer";


const reducersPack = combineReducers({
    tickets: ticketsReducer
});

export type InferActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

type reducersPackType = typeof reducersPack;
export type AppStateType = ReturnType<reducersPackType>;

export type CommonThunkType<A extends Action, P = Promise<void>> = ThunkAction<P, AppStateType, unknown, A>;

// to provide Redux DevTools extension in Chrome
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducersPack, composeEnhancers(applyMiddleware(thunk)));



export default store;
