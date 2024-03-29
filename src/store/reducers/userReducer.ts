import {IUser, UserAction, UserActionType, UserState} from "../../type/user";


const token = localStorage.getItem('token')

const initialState: UserState = {
    user: {id: 0, email: '', firstName: '', lastName: '', role: '', password: ''},
    error: null,
    loading: false,
    isAuth: !!token,
    success: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_LOADING_USER:
            return {...state, error: null, loading: true}
        case UserActionType.FETCH_ERROR_USER:
            return {...state, error: action.payload, success: null}
        case UserActionType.FETCH_LOGOUT_USER:
            localStorage.removeItem('token')
            return {...state,error: null, isAuth: false}
        case UserActionType.FETCH_SET_USER:
            return {...state, user: action.payload,error: null, isAuth: true}
        case UserActionType.FETCH_SUCCESS_USER:
            return {...state, success: action.payload, error: null}
        default:
            return state
    }
}


// @ts-ignore
export const setUser = (user) => ({type: UserActionType.FETCH_SET_USER, payload: user})