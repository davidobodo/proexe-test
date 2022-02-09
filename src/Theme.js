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
                    padding: "0px 1.2rem",
                    fontFamily: "Fjord One, serif"
                },
                ".Toastify__toast-body > div:last-child": {
                    fontSize: "1.4rem",
                    fontFamily: "Fjord One, serif"
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
                    fontSize: "1.6rem"
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontSize: "1.4rem",
                    textTransform: "capitalize",
                    cursor: "pointer",

                    "&:hover": {
                        backgroundColor: "auto",
                        boxShadow:
                            "0px 3px 5px -1px rgba(0,0,0,0.2),0px 5px 8px 0px rgba(0,0,0,0.14),0px 1px 14px 0px rgba(0,0,0,0.12)"
                    },

                    "&.Mui-disabled": {
                        opacity: "0.5",
                        color: "#fff",
                        cursor: "not-allowed"
                    }
                }
            }
        },
        MuiTableSortLabel: {
            styleOverrides: {
                root: {
                    "&:hover, &:focus": {
                        color: "#1976d2"
                    }
                }
            }
        },
        MuiTablePagination: {
            styleOverrides: {
                selectLabel: {
                    fontSize: "1.4rem"
                },
                displayedRows: {
                    fontSize: "1.4rem"
                }
            }
        },
        MuiSelect: {
            styleOverrides: {
                nativeInput: {
                    fontSize: "1.4rem"
                }
            }
        }
    },
    typography: {
        fontFamily: "Fjord One, serif"
    },
    shape: {
        borderRadius6: 6,
        borderRadius10: 10
    },
    palette: {
        yellow: "#EFB871"
    }
});
