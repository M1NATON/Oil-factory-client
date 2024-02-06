


export enum ProductActionType {
    FETCH_LOADING_PRODUCT = 'FETCH_LOADING_PRODUCT',
    FETCH_ADD_PRODUCT = 'FETCH_ADD_PRODUCT',
    FETCH_DELETE_PRODUCT = 'FETCH_DELETE_PRODUCT',
    FETCH_GET_PRODUCT = 'FETCH_GET_PRODUCT',
    FETCH_UPDATE_PRODUCT = 'FETCH_UPDATE_PRODUCT',
    FETCH_ERROR_PRODUCT = 'FETCH_ERROR_PRODUCT'
}

export interface IProduct {
    product_id: number,
    name: string
    description: string
    price: number
    availability: number
    volume: string
}


export interface ProductState {
    product: IProduct[],
    loading: boolean,
    error: string | null
}


interface ProductLoadingAction {
    type: ProductActionType.FETCH_LOADING_PRODUCT
}

interface ProductAddAction {
    type: ProductActionType.FETCH_ADD_PRODUCT
    payload: IProduct
}

interface ProductDeleteAction {
    type: ProductActionType.FETCH_DELETE_PRODUCT
}

interface ProductGetAction {
    type: ProductActionType.FETCH_GET_PRODUCT
    payload: IProduct[]
}


interface ProductUpdateAction {
    type: ProductActionType.FETCH_UPDATE_PRODUCT
    payload: IProduct
}

interface ProductErrorAction {
    type: ProductActionType.FETCH_ERROR_PRODUCT
    payload?: any
}


export type ProductAction =
    ProductLoadingAction
    | ProductAddAction
    | ProductDeleteAction
    | ProductGetAction
    | ProductUpdateAction
    | ProductErrorAction