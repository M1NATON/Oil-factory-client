import {Dispatch} from "redux";
import {IUser, UserAction, UserActionType} from "../../type/user";
import axios from "axios";
import {setUser} from "../reducers/userReducer";
import {API} from "../../utils";


export const login: any = (email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionType.FETCH_LOADING_USER})
            const response = await axios.post<IUser>(API + '/users/login', {
                email,
                password
            })

            // @ts-ignore
            const token = response.data.token
            if (token) {

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


export const registration: any = (lastName: string, firstName: string, email: string, password: string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            const response = await axios.post<IUser>(API + '/users/register', {
                lastName,
                firstName,
                email,
                password
            })

            dispatch({
                type: UserActionType.FETCH_SUCCESS_USER,
                // @ts-ignore
                payload: response.data.message
            })
        } catch (e) {
            // @ts-ignore
            dispatch({
                type: UserActionType.FETCH_ERROR_USER,
                // @ts-ignore
                payload: e.response.data.message
            })


        }
    }
}


export const auth: any = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        const token = localStorage.getItem('token')

        if (!token) {
            return
        }
        try {
            const response = await axios.get(API + '/users/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
        } catch (e: any) {
            if (e.response && e.response.status === 401) {

                localStorage.removeItem('token');
            } else {
                alert("Error while fetching user data.");
            }
        }

    }
}

export const logout = () => ({type: UserActionType.FETCH_LOGOUT_USER})
