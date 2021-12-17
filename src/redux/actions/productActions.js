import {ActionTypes} from '../constant/action-types';
export const setProducts = (products) => {
    return  {
        type: ActionTypes.SET_PRODUCTS,
        payload: products, 
    }
}

export const selectedProduct = (product) => {
    return  {
        type: ActionTypes.SElECTED_PRODUCT,
        payload: product, 
    }
}
