import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import { theme } from "./Theme";
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
