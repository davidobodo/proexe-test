import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => {
    return {
        tableContainer: {
            border: "1px solid rgb(224,224,224)",
            borderRadius: theme.shape.borderRadius10,
            overflow: "hidden"
        },
        emptyTableCell: {
            textAlign: "center !important"
        }
    };
});
