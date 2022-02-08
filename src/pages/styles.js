import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
    return {
        pageWrapper: {
            padding: "2rem 1rem",

            [theme.breakpoints.up("md")]: {
                padding: "5rem"
            }
        },
        pageTitle: {
            marginBottom: "3.4rem"
        },
        sectionContainer: {
            borderRadius: theme.shape.borderRadius10,
            boxShadow: theme.shadows[3]
        },
        sectionContainerHeader: {
            display: "flex",
            justifyContent: "space-between",
            padding: "2rem",
            borderBottom: `1px solid ${theme.palette.divider}`
        },
        sectionContainerBody: {
            padding: "2rem"
        }
    };
});
