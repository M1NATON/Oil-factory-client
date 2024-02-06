import {IInquiries, InquiriesAction, InquiriesActionType} from "../../type/inquiries";
import {Dispatch} from "redux";
import axios from "axios";
import {API} from "../../utils";


export const createInquiries: any = (DataInquiries: IInquiries) => {
    return async (dispatch: Dispatch<InquiriesAction>) => {
        try {
            dispatch({type: InquiriesActionType.FETCH_LOADING_INQUIRIES})
            const response = await axios.post<IInquiries>(API + '/inquiries', DataInquiries)
            dispatch({
                type: InquiriesActionType.FETCH_ADD_INQUIRIES,
                // @ts-ignore
                payload: response.data.inquiry
            })
        } catch (e: any) {
            console.log('error createInquiries', e.response.data.message)
        }
    }
}