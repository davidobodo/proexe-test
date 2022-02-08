import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
    return {
        formHeader: {
            padding: "2rem",
            borderBottom: `1px solid ${theme.palette.divider}`
        },

        formBody: {
            padding: "2.4rem 0px",

            "& .formField": {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "3.4rem",

                [theme.breakpoints.up("md")]: {
                    paddingLeft: "15%"
                },

                "&:last-child": {
                    marginBottom: "0px"
                },

                "& label": {
                    width: "15%"
                }
            }
        },

        formFooter: {
            display: "flex",
            justifyContent: "flex-end",
            padding: "2.4rem 0px"
        }
    };
});
