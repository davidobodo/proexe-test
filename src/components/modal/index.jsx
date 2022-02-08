import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            "& .title": {
                padding: "1rem 2rem",
                borderBottom: `1px solid ${theme.palette.divider}`
            },

            "& .body": {
                padding: "2rem",
                fontSize: "1.6rem",
                textAlign: "center",
                borderBottom: `1px solid ${theme.palette.divider}`
            },

            "& .ctas": {
                padding: "1rem 2rem",
                display: "flex",
                justifyContent: "flex-end",

                "& button:first-child": {
                    marginRight: "1.2rem"
                },

                "& button:last-child": {
                    backgroundColor: theme.palette.error.main
                }
            }
        }
    };
});

export const DeleteModal = ({ open, handleClose, handleDeleteUser, userId, isDeletingUser }) => {
    const classes = useStyles();

    return (
        <Dialog onClose={handleClose} open={open}>
            <section className={classes.wrapper}>
                <h2 className="title">Delete</h2>
                <p className="body">
                    Are you sure you want to delete this user? <br /> Action cannot be undone
                </p>
                <div className="ctas">
                    <Button variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={() => handleDeleteUser(userId)} disabled={isDeletingUser}>
                        {isDeletingUser ? "Deleting..." : "Delete"}
                    </Button>
                </div>
            </section>
        </Dialog>
    );
};

DeleteModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
    userId: PropTypes.string,
    isDeletingUser: PropTypes.bool.isRequired
};
