

export enum InquiriesActionType {
    FETCH_LOADING_INQUIRIES = 'FETCH_LOADING_INQUIRIES',
    FETCH_ADD_INQUIRIES = 'FETCH_ADD_INQUIRIES',
    FETCH_UPDATE_INQUIRIES = 'FETCH_UPDATE_INQUIRIES',
    FETCH_DELETE_INQUIRIES = 'FETCH_DELETE_INQUIRIES',
    FETCH_ERROR_INQUIRIES = 'FETCH_ERROR_INQUIRIES'
}


export interface IInquiries {
    id?: number
    lastName: string
    nameOfOrganization: string
    number: string
    email: string
    status?: string
    text: string
}

export interface InquiriesState {
    inquiries: IInquiries[]
    loading: boolean
    error: string | null
}


interface InquiriesLoadingAction{
    type: InquiriesActionType.FETCH_LOADING_INQUIRIES
}

interface InquiriesAddAction {
    type: InquiriesActionType.FETCH_ADD_INQUIRIES
    payload: IInquiries
}

interface InquiriesUpdateAction {
    type: InquiriesActionType.FETCH_UPDATE_INQUIRIES
    payload: IInquiries
}

interface InquiriesDeleteAction{
    type: InquiriesActionType.FETCH_DELETE_INQUIRIES
}

interface InquiriesErrorAction {
    type: InquiriesActionType.FETCH_ERROR_INQUIRIES
    payload?: any
}

export type InquiriesAction =
    InquiriesLoadingAction
    | InquiriesAddAction
    | InquiriesUpdateAction
    | InquiriesDeleteAction
    | InquiriesErrorAction