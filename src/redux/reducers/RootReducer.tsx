import { combineReducers } from 'redux';
import AuthReducer from './AuthReducers';
import ProductReducer from './ProductReducers';

const RootReducer = combineReducers({ 
    auth: AuthReducer,
    product: ProductReducer,
})

export default RootReducer;