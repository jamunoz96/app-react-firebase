

import { AppActionType } from "../types/AppActionType";
import { ProductType } from "../types/ProductType";
import { AUTH_LOGOUT } from "./AuthReducers";

export const LOADING = 'product/LOADING';
export const PRODUCT_SUCCESS = 'product/PRODUCT_SUCCESS';
export const PRODUCT_FAILED = 'product/PRODUCT_FAILED';
export const PRODUCT_SAVE = 'product/PRODUCT_SAVE';

const productsHydrate = () : any => {
    const products : string | null = localStorage.getItem("products");
    if(products) return JSON.parse(products);
    else return [];
};


const initialState : ProductType = {
  products: productsHydrate(),
  errorMessage: null,
  isLoaded: false,
  isLoading: false,
  saved: "N"
};

const ProductReducer = (state = initialState, action: AppActionType ) : ProductType   => {
    let currentProducts = [];
    switch(action.type) {
        case LOADING:
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                saved: "P"
            }
        case PRODUCT_SUCCESS:
            console.log("ok ", action.payload.data)
            console.log("ok ", JSON.stringify(action.payload.data))
            localStorage.setItem("products", JSON.stringify(action.payload.data));
            return {
                ...state,
                products: action.payload.data,
                isLoading: false,
                isLoaded: true,
                errorMessage: null
            }
        case PRODUCT_SAVE:
            currentProducts = [...state.products, action.payload.data];
            localStorage.setItem("products", JSON.stringify(currentProducts));
            return {
                ...state,
                errorMessage: null,
                products: currentProducts,
                isLoading: false,
                saved: "Y"
            }
        case PRODUCT_FAILED:
            return {
                ...state,
                errorMessage: action.payload.error,
                products: [],
                isLoading: false,
                isLoaded: true,
                saved: "N"
            }
        case AUTH_LOGOUT:
            localStorage.removeItem("products")
            return {
                ...state,
                errorMessage: null,
                products: [],
                isLoading: false,
                isLoaded: false,
                saved: "N"
            }
        default:
            return state
    }

};

export default ProductReducer;