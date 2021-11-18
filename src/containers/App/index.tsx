import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
// import { store } from "src/redux/store";
import AppRoutes from 'src/routes';
// import "./App.css"

const App = () => {
  return <>
    {/* <Provider store={store}> */}
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    {/* </Provider> */}
  </>
}

export default App;
