import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store";
import { ChakraProvider } from "@chakra-ui/react"
import AppRoutes from 'src/routes';
import theme from 'src/themes';
import ToggleTheme from 'src/components/Commons/ToggleTheme';

const App = () => {
  return <>
    <Provider store={store}>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <AppRoutes />
            <ToggleTheme />
          </ChakraProvider>
        </BrowserRouter>
    </Provider>
  </>
}

export default App;
