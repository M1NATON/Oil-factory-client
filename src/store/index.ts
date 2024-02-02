import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers";
import {thunk} from "redux-thunk";


// @ts-ignore
export const store = createStore(rootReducer, applyMiddleware(thunk))