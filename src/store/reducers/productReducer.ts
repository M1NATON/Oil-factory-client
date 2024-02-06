import {ProductAction, ProductActionType, ProductState} from "../../type/product";


const initialState: ProductState = {
    product: [],
    loading: false,
    error: null
}


export const productReducer = (state = initialState, action: ProductAction):ProductState => {
    switch (action.type) {
        case ProductActionType.FETCH_LOADING_PRODUCT:
            return {product: [], loading: true, error: null}
        case ProductActionType.FETCH_ADD_PRODUCT:
            return {product: [...state.product, action.payload], error: null, loading: false}
        case ProductActionType.FETCH_DELETE_PRODUCT:
            return {product: [...state.product], loading: false, error: null}
        case ProductActionType.FETCH_GET_PRODUCT:
            return {product: [...action.payload], error: null, loading: false}
        case ProductActionType.FETCH_UPDATE_PRODUCT:
            return {product: [...state.product, action.payload], error: null, loading: false}
        case ProductActionType.FETCH_ERROR_PRODUCT:
            return {product: [], loading: false, error: action.payload}
        default:
            return state
    }
}