import {Dispatch} from "redux";
import {IProduct, ProductAction, ProductActionType} from "../../type/product";
import axios from "axios";
import {API} from "../../utils";


export const getProduct:any = () => {
    return async (dispatch: Dispatch<ProductAction>) => {
        try {
            dispatch({type: ProductActionType.FETCH_LOADING_PRODUCT})
            const response = await axios.get<IProduct>(API + '/products')
            // @ts-ignore
            dispatch({
                type: ProductActionType.FETCH_GET_PRODUCT,
                // @ts-ignore
                payload: response.data.products
            })
        } catch (e) {
            console.log(e)
        }
    }
}