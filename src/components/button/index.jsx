import React from "react";
import Button from "@mui/material/Button";

export const CustomButton = ({ onClick, label }) => {
    return (
        <Button variant="contained" onClick={onClick}>
            {label}
        </Button>
    );
};
