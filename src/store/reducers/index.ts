import {combineReducers} from "redux";
import {userReducer} from "./userReducer";
import {productReducer} from "./productReducer";


export const rootReducer = combineReducers({
    user: userReducer,
    products: productReducer
})


export type RootState = ReturnType<typeof rootReducer>