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
                },
                label: {
                    fontSize: "1.4rem"
                },
                input: {
                    fontSize: "1.4rem",
                    height: "4rem",
                    borderRadius: "6px",
                    border: "1px solid rgba(0,0,0,0.4)",
                    width: "100%",
                    padding: "0px 1.2rem"
                }
            }
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    backgroundColor: "#eeeeee"
                }
            }
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    fontSize: "1.4rem"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    "&:hover": {
                        backgroundColor: "auto"
                    }
                }
            }
        }
    },
    typography: {
        fontFamily: "Ubuntu, sans-serif"
    },
    shape: {
        borderRadius6: 6,
        borderRadius10: 10
    },
    palette: {
        yellow: "#EFB871"
    }
});
