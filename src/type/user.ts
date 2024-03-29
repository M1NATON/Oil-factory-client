export enum UserActionType {
    FETCH_LOADING_USER = 'FETCH_LOADING_USER',
    FETCH_SET_USER = 'FETCH_SET_USER',
    FETCH_LOGOUT_USER = 'FETCH_LOGOUT_USER',
    FETCH_ERROR_USER = 'FETCH_ERROR_USER',
    FETCH_SUCCESS_USER = 'FETCH_SUCCESS_USER'
}



export interface IUser {
    id?: number,
    firstName: string
    lastName: string
    email: string
    password: string
    role?: string
}


export interface UserState {
    user: IUser,
    loading: boolean,
    isAuth: boolean
    error: string | null
    success: string | null
}

interface LoadingUserAction {
    type: UserActionType.FETCH_LOADING_USER
}


interface SetUserAction {
    type: UserActionType.FETCH_SET_USER
    payload: IUser
}
interface SuccessUserAction {
    type: UserActionType.FETCH_SUCCESS_USER
    payload: string
}

interface LogoutUserAction {
    type: UserActionType.FETCH_LOGOUT_USER
}

interface ErrorUserAction {
    type: UserActionType.FETCH_ERROR_USER
    payload: string
}

export type UserAction = LoadingUserAction
    | SetUserAction
    | LogoutUserAction
    | ErrorUserAction
    | SuccessUserAction

