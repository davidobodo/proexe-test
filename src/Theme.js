import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                html: {
                    WebkitFontSmoothing: "auto",
                    margin: "0",
                    padding: "0",
                    fontSize: "62.5%"
                },
                "*": {
                    margin: "0",
                    padding: "0",
                    boxSizing: "border-box"
                },
                h1: {
                    fontSize: "2.8rem"
                },
                h2: {
                    fontSize: "2.4rem"
                },
                h3: {
                    fontSize: "2rem"
                },
                h4: {
                    fontSize: "1.6rem"
                },
                h5: {
                    fontSize: "1.2rem"
                },
                h6: {
                    fontSize: "1rem"
                }
            }
        }
    }
});
