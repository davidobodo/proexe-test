import { useEffect } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { store } from "./store";
import { fetchAllUsers } from "./store/actionCreators";
import { theme } from "./Theme";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/home";
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
            <HomePage users={users} />
        </div>
    );
};

//----------------------------------------
//Set Providers and all Globals
//----------------------------------------
const App = () => {
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Root />
            </ThemeProvider>
        </Provider>
    );
};
export default App;
