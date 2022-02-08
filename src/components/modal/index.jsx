import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import PropTypes from "prop-types";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};

export const DeleteModal = ({ open, handleClose, handleDeleteUser, userId }) => {
    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>Delete</h1>
                    <p>Are you sure you want to delete this user? Action cannot be undone</p>

                    <div>
                        <Button variant="contained" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" onClick={() => handleDeleteUser(userId)}>
                            Delete
                        </Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

DeleteModal.propTypes = {
    open: PropTypes.bool.isRequired,
    handleClose: PropTypes.func.isRequired,
    handleDeleteUser: PropTypes.func.isRequired,
    userId: PropTypes.string
};
