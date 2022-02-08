import React from "react";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        wrapper: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: theme.palette.common.white,
            // padding: "2rem",
            borderRadius: theme.shape.borderRadius,
            width: 400,

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

export const DeleteModal = ({ open, handleClose, handleDeleteUser, userId }) => {
    const classes = useStyles();

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <section className={classes.wrapper}>
                <h2 className="title">Delete</h2>
                <p className="body">
                    Are you sure you want to delete this user? <br /> Action cannot be undone
                </p>
                <div className="ctas">
                    <Button variant="contained" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" onClick={() => handleDeleteUser(userId)}>
                        Delete
                    </Button>
                </div>
            </section>
        </Modal>
    );
};

DeleteModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
    userId: PropTypes.string
};
