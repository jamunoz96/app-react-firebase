

import { getLoading } from "src/utils/getLoading";
import { getInfoAuth } from "src/utils/getInfoAuth";
import { AppActionType } from "../types/AppActionType";
import { AuthType } from "../types/AuthType";

export const LOADING = 'auth/LOADING';
export const AUTH_SUCCESS = 'auth/AUTH_SUCCESS';
export const AUTH_FAILED = 'auth/AUTH_FAILED';
export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';
export const CLEAR_MESSAGES = 'auth/CLEAR_MESSAGES';

const userHydrate = () : any => getInfoAuth();
const loadingHydrate = () : boolean => getLoading();

const initialState : AuthType = {
  user: userHydrate(),
  errorMessage: null,
  isLoaded: false,
  isLoading: loadingHydrate()
};

const AuthReducer = (state = initialState, action: AppActionType ) : AuthType   => {

    switch(action.type) {
        case LOADING:
            localStorage.setItem("auth_loading", "true"); 
            return {
                ...state,
                isLoading: true,
                isLoaded: false,
                user: null
            }
        case CLEAR_MESSAGES:
            return {
                ...state,
                errorMessage: null
            }
        case AUTH_SUCCESS:
            localStorage.setItem("auth_user", JSON.stringify(action.payload.data));
            localStorage.setItem("auth_loading", "false");
            return {
                ...state,
                user: action.payload.data,
                isLoading: false,
                isLoaded: true,
                errorMessage: null
            }
        case AUTH_LOGOUT:
            localStorage.removeItem("auth_user");
            localStorage.removeItem("auth_loading");
            return {
                ...state,
                errorMessage: null,
                user: null,
                isLoading: false,
                isLoaded: false,
            }
        case AUTH_FAILED:
            localStorage.setItem("auth_loading", "false");
            return {
                ...state,
                errorMessage: action.payload.error,
                user: null,
                isLoading: false,
                isLoaded: true,
            }
        default:
            return state
    }

};

export default AuthReducer;