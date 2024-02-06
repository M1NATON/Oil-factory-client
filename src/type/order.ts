export enum OrderActionType {
    FETCH_LOADING_ORDER = 'FETCH_LOADING_ORDER',
    FETCH_ADD_ORDER = 'FETCH_ADD_ORDER',
    FETCH_DELETE_ORDER = 'FETCH_DELETE_ORDER',
    FETCH_GET_ORDER = 'FETCH_GET_ORDER',
    FETCH_ERROR_ORDER = 'FETCH_ERROR_ORDER'
}

export interface IOrderProduct {
    product_id: number;
    quantity: number;
}

export interface IOrder {
    order_id?: number;
    user_id: number;
    delivery_address: string;
    products: IOrderProduct[];
}

export interface OrderState {
    orders: IOrder[];
    loading: boolean;
    error: string | null;
}

interface OrderLoadingAction {
    type: OrderActionType.FETCH_LOADING_ORDER;
}

interface OrderAddAction {
    type: OrderActionType.FETCH_ADD_ORDER;
    payload: IOrder;
}

interface OrderDeleteAction {
    type: OrderActionType.FETCH_DELETE_ORDER;
}

interface OrderGetAction {
    type: OrderActionType.FETCH_GET_ORDER;
    payload: IOrder[];
}

interface OrderErrorAction {
    type: OrderActionType.FETCH_ERROR_ORDER;
    payload?: any;
}

export type OrderAction =
    | OrderLoadingAction
    | OrderAddAction
    | OrderDeleteAction
    | OrderGetAction
    | OrderErrorAction;