import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import CssBaseline from "@mui/material/CssBaseline";
import HomePage from "./pages/home";
function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App">
                <HomePage />
            </div>
        </ThemeProvider>
    );
}

export default App;
