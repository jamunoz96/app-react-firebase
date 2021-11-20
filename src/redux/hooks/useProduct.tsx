import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadProducts } from "../actions/ProductActions";
import { AppStateType } from "../types/AppStateType";
import { ProductType } from "../types/ProductType";
import { AppDispatch } from "../utils/AppDispatch";

export const useProduct = () => {
    const { isLoading, errorMessage, products, isLoaded } : ProductType = useSelector((state: AppStateType) => state.product);
    useEffect(() => {
        if(!isLoaded && !products.length) AppDispatch(loadProducts());
    }, [products, isLoaded])
    return { isLoading, errorMessage, products}
}