import React, { useEffect, Fragment } from "react";
import { useDispatch, Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./store";
import { fetchAllUsers } from "./store/actionCreators";
import { theme } from "./Theme";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/home";
import FormPage from "./pages/form";

const Root = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    return (
        <Fragment>
            <Route exact component={(props) => <FormPage {...props} />} path="/form" />
            <Route exact component={HomePage} path="/" />
        </Fragment>
    );
};

//----------------------------------------
//SET PROVIDERS AND GLOBALS
//----------------------------------------
const App = () => {
    console.log(theme, "THE THEME IN THIS SECTION");
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Root />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    );
};
export default App;
