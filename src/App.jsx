import React, { useEffect, Fragment } from "react";
import { useDispatch, Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./store";
import { fetchAllUsers } from "./store/actionCreators";
import { theme } from "./Theme";
import { ToastContainer } from "react-toastify";
import CssBaseline from "@mui/material/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/home";
import FormPage from "./pages/form";

const Root = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    return (
        <Fragment>
            <Route exact component={FormPage} path="/form" />
            <Route exact component={HomePage} path="/" />
        </Fragment>
    );
};

//----------------------------------------
//SET PROVIDERS AND GLOBALS
//----------------------------------------
const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Root />
                    <ToastContainer />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
