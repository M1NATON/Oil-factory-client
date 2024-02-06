import {InquiriesAction, InquiriesActionType, InquiriesState} from "../../type/inquiries";


const initialState: InquiriesState = {
    inquiries: [],
    loading: false,
    error: null
}


export const inquiriesReducer = (state = initialState, action: InquiriesAction): InquiriesState => {
    switch (action.type) {
        case InquiriesActionType.FETCH_LOADING_INQUIRIES:
            return {...state, loading: true}
        case InquiriesActionType.FETCH_ADD_INQUIRIES:
            return {error: null, loading: false, inquiries: [...state.inquiries, action.payload]}
        case InquiriesActionType.FETCH_UPDATE_INQUIRIES:
            return {error: null, loading: false, inquiries: [...state.inquiries, action.payload]}
        case InquiriesActionType.FETCH_DELETE_INQUIRIES:
            return {error: null, loading: false, inquiries: [...state.inquiries]}
        case InquiriesActionType.FETCH_ERROR_INQUIRIES:
            return {error: action.payload, loading: false, inquiries: []}
        default:
            return state
    }
}