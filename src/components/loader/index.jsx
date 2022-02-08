import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export const BackdropWithLoader = ({ open = true, handleClose, hasLabel = false, label }) => {
    return (
        <Backdrop open={open} onClick={handleClose} style={{ backgroundColor: "#fff", flexDirection: "column" }}>
            <CircularProgress />
            {hasLabel && (
                <span className="label" style={{ marginTop: "1.2rem", fontSize: "1.2rem" }}>
                    {label}
                </span>
            )}
        </Backdrop>
    );
};
