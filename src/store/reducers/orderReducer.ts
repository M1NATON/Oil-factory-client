import { OrderAction, OrderActionType, OrderState } from "../../type/order";

const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null
};

export const orderReducer = (state = initialState, action: OrderAction): OrderState => {
    switch (action.type) {
        case OrderActionType.FETCH_LOADING_ORDER:
            return { ...state, orders: [], loading: true, error: null };
        case OrderActionType.FETCH_ADD_ORDER:
            return { ...state, orders: [...state.orders, action.payload], loading: false, error: null };
        case OrderActionType.FETCH_DELETE_ORDER:
            return { ...state, loading: false, error: null };
        case OrderActionType.FETCH_GET_ORDER:
            return { ...state, orders: action.payload, loading: false, error: null };
        case OrderActionType.FETCH_ERROR_ORDER:
            return { ...state, orders: [], loading: false, error: action.payload };
        default:
            return state;
    }
};