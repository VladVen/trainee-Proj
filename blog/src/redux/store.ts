import {Action, applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware, {ThunkAction} from "redux-thunk";
import {useDispatch} from "react-redux";
import {authReducer} from "./Login/reducer";
import {usersReducer} from "./Users/reducer";
import {postReducer} from "./Posts/reducer";

const reducersPack = combineReducers({
    auth: authReducer,
    users: usersReducer,
    posts: postReducer
})

export type InferActionType<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never

type reducersPackType = typeof reducersPack
export type AppStateType = ReturnType<reducersPackType>

export type CommonThunkType<A extends Action, P = Promise<void>> = ThunkAction<P, AppStateType, unknown, A>


// to provide Redux DevTools extension in Chrome
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducersPack, composeEnhancers(
    applyMiddleware(thunkMiddleware)
));


export type TypedDispatch = typeof store.dispatch;

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

export default store