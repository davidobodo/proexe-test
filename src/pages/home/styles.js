import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
    return {
        pageWrapper: {
            padding: "5rem",

            "& .page-title": {
                marginBottom: "3.4rem"
            }
        },
        sectionContainer: {
            // border: "1px solid #000",
            borderRadius: theme.shape.borderRadius10,
            boxShadow: theme.shadows[3],
            // padding: "2rem",

            "& .header": {
                display: "flex",
                justifyContent: "space-between",
                // marginBottom: "3.4rem",
                padding: "2rem",
                borderBottom: `1px solid ${theme.palette.divider}`
            },

            "& .table-wrapper": {
                padding: "2rem"
            }
        }
    };
});
