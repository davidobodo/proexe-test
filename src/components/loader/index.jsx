import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => {
    return {
        wrapper: {
            backgroundColor: "#fff !important",
            flexDirection: "column"
        },
        label: {
            fontSize: "1.4rem",
            marginTop: "1.2rem"
        }
    };
});
export const BackdropWithLoader = ({ open = true, handleClose, hasLabel = false, label }) => {
    const classes = useStyles();
    return (
        <Backdrop open={open} onClick={handleClose} className={classes.wrapper}>
            <CircularProgress />
            {hasLabel && <span className={classes.label}>{label}</span>}
        </Backdrop>
    );
};
