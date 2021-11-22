
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithRedirect, signOut, UserCredential } from "@firebase/auth";
import { auth, providerGoogle, providerGithub } from "src/services/Firebase/providers";
import { AuthForm } from "src/types/AuthForm";
import { LOADING, AUTH_SUCCESS, AUTH_FAILED, AUTH_LOGOUT, CLEAR_MESSAGES } from "../reducers/AuthReducers";
import { AppDispatchType } from "../types/AppDispatchType";

const _AUTH_SUCCESS = (data : any) => ({
    type: AUTH_SUCCESS,
    payload: {data, error: null}
});

const _AUTH_FAILED = (err : any) => ({
    type: AUTH_FAILED,
    payload: {data: null, error: err}
});

const _AUTH_LOGOUT = () => ({
    type: AUTH_LOGOUT,
    payload: {data: null, error: null}
});

const _LOADING = () => ({
    type: LOADING,
    payload: {data: null, error: null}
});

const _CLEAR_MESSAGES = () => ({
    type: CLEAR_MESSAGES,
    payload: { data: null, error: null }
});

export const register = (form : AuthForm) => (dispatch: AppDispatchType) => {
    dispatch(_LOADING());
    createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((result : UserCredential) => {
            dispatch(_AUTH_SUCCESS(result.user));
        })
        .catch(err => {
            dispatch(_AUTH_FAILED(err.message));
        })
};

export const loginWithEmail = (form : AuthForm) => (dispatch: AppDispatchType) => {
    dispatch(_LOADING());
    signInWithEmailAndPassword(auth, form.email, form.password)
        .then((result : UserCredential) => {
            dispatch(_AUTH_SUCCESS(result.user));
        })
        .catch(err => {
            dispatch(_AUTH_FAILED(err.message));
        })
};

export const loginWithGoogle = () => (dispatch: AppDispatchType) => {
    dispatch(_LOADING());
    signInWithRedirect(auth, providerGoogle)
};

export const loginWithGithub = () => (dispatch: AppDispatchType) => {
    dispatch(_LOADING());
    signInWithRedirect(auth, providerGithub)
};

export const setAuthSuccess = (user : any) => (dispatch: AppDispatchType) => {
    dispatch(_AUTH_SUCCESS(user));
};

export const setAuthFailed = (error : any) => (dispatch: AppDispatchType) => {
    dispatch(_AUTH_FAILED(error));
};

export const logout = () => (dispatch: AppDispatchType) => {
    signOut(auth).then(() => {
        dispatch(_AUTH_LOGOUT());
    })
};

export const clearMessages = () => (dispatch: AppDispatchType) => {
    dispatch(_CLEAR_MESSAGES());
}