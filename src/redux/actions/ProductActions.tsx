
import { firebaseGetImagesProduct, firebaseGetProducts, firebaseSaveProduct, firebaseUploadImagesProduct } from "src/services/Product";
import { Product } from "src/types/Product";
import { LOADING, PRODUCT_SUCCESS, PRODUCT_FAILED, PRODUCT_SAVE } from "../reducers/ProductReducers";
import { AppDispatchType } from "../types/AppDispatchType";
import { AppStoreType } from "../types/AppStoreType";

const _PRODUCT_SUCCESS = (data: any) => ({
    type: PRODUCT_SUCCESS,
    payload: { data, error: null }
});

const _PRODUCT_FAILED = (err: any) => ({
    type: PRODUCT_FAILED,
    payload: { data: null, error: err }
});

const _PRODUCT_SAVE = (data: any) => ({
    type: PRODUCT_SAVE,
    payload: { data, error: null }
});

const _LOADING = () => ({
    type: LOADING,
    payload: { data: null, error: null }
});


export const loadProducts = () => (dispatch: AppDispatchType, state: AppStoreType) => {
    dispatch(_LOADING());
    const { user } = state().auth;
    firebaseGetProducts(user.uid)
        .then((products: Product[]) => {
            dispatch(_PRODUCT_SUCCESS(products));
            firebaseGetImagesProduct(products)
                .then((result: Product[]) => {
                    dispatch(_PRODUCT_SUCCESS(result));
                });
        })
        .catch(err => {
            dispatch(_PRODUCT_FAILED(err.message));
        })
};


export const saveProduct = (product: Product, images: any[]) => (dispatch: AppDispatchType, state: AppStoreType) => {
    dispatch(_LOADING());
    const { user }: any = state().auth;
    firebaseSaveProduct({ ...product, user_id: user.uid })
        .then((result: any) => {
            firebaseUploadImagesProduct(result.id, images)
                .then(() => {
                    dispatch(_PRODUCT_SAVE({ ...product, id: result.id }));
                })
                .catch(err => {
                    dispatch(_PRODUCT_FAILED(err.message));
                })
        })
        .catch(err => {
            dispatch(_PRODUCT_FAILED(err.message));
        })
};

