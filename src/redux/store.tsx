import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

// export const store = createStore(RootReducer, 
//     compose(applyMiddleware(thunk)));
    // compose(composeWithDevTools(applyMiddleware(thunk))));