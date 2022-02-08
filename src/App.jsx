import { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./store";
import { fetchAllUsers } from "./store/actionCreators";
import { theme } from "./Theme";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/home";
import FormPage from "./pages/form";
const Root = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersVault.users);
    const isLoadingUsers = useSelector((state) => state.usersVault.isLoadingUsers);

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, []);

    if (isLoadingUsers) return <h1>Loading Users</h1>;
    return (
        <div className="App">
            <Route exact component={(props) => <FormPage {...props} />} path="/form" />
            <Route exact component={(props) => <HomePage users={users} {...props} />} path="/" />
        </div>
    );
};

//----------------------------------------
//Set Providers and all Globals
//----------------------------------------
const App = () => {
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
