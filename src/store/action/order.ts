import {IOrder, OrderAction, OrderActionType} from "../../type/order";
import {Dispatch} from "redux";
import axios from "axios";
import {API} from "../../utils";


export const addOrder: any = (user_id: number,
                              delivery_address: string,
                              products: object) => {
    return async (dispatch: Dispatch<OrderAction>) => {
        try {
            dispatch({type: OrderActionType.FETCH_LOADING_ORDER})
            const token = localStorage.getItem('token')
            const response = await axios.post<IOrder>(API + '/orders', {
                user_id,
                delivery_address,
                products
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log('orderData', user_id,
                delivery_address,
                products)
            console.log('response', response)
            dispatch({
                type: OrderActionType.FETCH_ADD_ORDER,
                // @ts-ignore
                payload: response.data.order
            })
        } catch (e: any) {
            dispatch({
                type: OrderActionType.FETCH_ERROR_ORDER,
                payload: e.response.message
            })
        }
    }
}