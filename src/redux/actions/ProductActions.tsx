
import { QueryDocumentSnapshot, QuerySnapshot } from "@firebase/firestore";
import { firebaseGetProducts, firebaseSaveProduct, firebaseUploadImagesProduct } from "src/services/Product";
import { Product } from "src/types/Product";
import { LOADING, PRODUCT_SUCCESS, PRODUCT_FAILED, PRODUCT_SAVE } from "../reducers/ProductReducers";
import { AppDispatchType } from "../types/AppDispatchType";

const _PRODUCT_SUCCESS = (data : any) => ({
    type: PRODUCT_SUCCESS,
    payload: {data, error: null}
});

const _PRODUCT_FAILED = (err : any) => ({
    type: PRODUCT_FAILED,
    payload: {data: null, error: err}
});

const _PRODUCT_SAVE = (data : any) => ({
    type: PRODUCT_SAVE,
    payload: {data, error: null}
});

const _LOADING = () => ({
    type: LOADING,
    payload: {data: null, error: null}
});

export const loadProducts = () => (dispatch: AppDispatchType) => {
    dispatch(_LOADING());
    firebaseGetProducts()
        .then((result : QuerySnapshot<any>) => {
            let products : Product[] = []
            result.forEach((doc : QueryDocumentSnapshot<Product>) => {
                let data = doc.data()
                data.id = doc.id;
                products.push(data)
            });
            dispatch(_PRODUCT_SUCCESS(products));
        })
        .catch(err => {
            dispatch(_PRODUCT_FAILED(err.message));
        })
    
};


export const saveProduct = (product : Product, images: any[]) => (dispatch: AppDispatchType) => {
    // dispatch(_LOADING());
    firebaseSaveProduct(product)
        .then((result : any) => {
            firebaseUploadImagesProduct(result.id, images)
                .then(() => {
                    console.log("se subieron todas las imagenes")
                })
            // dispatch(_PRODUCT_SAVE({...product, id: result.id}));
        })
        .catch(err => {
            dispatch(_PRODUCT_FAILED(err.message));
        })
};