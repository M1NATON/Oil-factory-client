import {Dispatch} from "redux";
import {IUser, UserAction, UserActionType} from "../../type/user";
import axios from "axios";
import {setUser} from "../reducers/userReducer";

const API = 'http://localhost:9001/api/'

export const login: any = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_LOADING_USER})
            const response = await axios.post<IUser>(API + 'users/login', {
                email,
                password
            })

            // @ts-ignore
            const token = response.data.token
            if(token) {
                // @ts-ignore
                dispatch(setUser(response.data.user))
                localStorage.setItem('token', token)
            } else {
                console.log('Нет токена')
            }
        } catch (e) {
            dispatch({
                type: UserActionType.FETCH_ERROR_USER,
                // @ts-ignore
                payload: e.response.data.message
            })
        }
    }
}

export const logout = () => ({type: UserActionType.FETCH_LOGOUT_USER})
