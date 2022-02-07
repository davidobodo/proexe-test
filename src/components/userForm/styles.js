import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
    return {
        formHeader: {
            padding: "2rem",
            borderBottom: `1px solid ${theme.palette.divider}`
        },

        formBody: {
            padding: "2.4rem",

            "& .formField": {
                display: "flex",
                justifyContent: "center",
                marginBottom: "3.4rem",

                "&:last-child": {
                    marginBottom: "0px"
                },

                "& label": {
                    width: "30%"
                }
            }
        },

        formFooter: {
            display: "flex",
            justifyContent: "flex-end",
            padding: "2.4rem"
        }
    };
});
