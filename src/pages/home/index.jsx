import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { CustomTable } from "../../components/table";
import { DeleteModal } from "../../components/modal";
import { BackdropWithLoader } from "../../components/loader";
import { deleteOneUser } from "../../store/actionCreators";
import { useStyles } from "./styles";
const HomePage = ({ history }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.usersVault.users);
    const isLoadingUsers = useSelector((state) => state.usersVault.isLoadingUsers);
    const [userToDeleteId, setUserToDeleteId] = useState("");
    const onDeleteUser = (id) => {
        setUserToDeleteId(id);
    };
    const onEditUser = (userData) => {
        history.push({
            pathname: "/form",
            state: userData
        });
    };
    const onCloseModal = () => {
        setUserToDeleteId("");
    };
    const handleDeleteUser = (userId) => {
        dispatch(deleteOneUser(userId));
    };

    if (isLoadingUsers) {
        return <BackdropWithLoader hasLabel={true} label="Loading users..." />;
    }
    return (
        <div className={classes.pageWrapper}>
            <h1 className="page-title">Dashboard</h1>
            <section className={classes.sectionContainer}>
                <header className="header">
                    <h2>Users List</h2>
                    <Button variant="contained" onClick={() => onDeleteUser()}>
                        Add New User
                    </Button>
                </header>
                <div className="table-wrapper">
                    <CustomTable data={users} onDeleteUser={onDeleteUser} onEditUser={onEditUser} />
                </div>
            </section>
            <DeleteModal
                open={!!userToDeleteId}
                handleClose={onCloseModal}
                handleDeleteUser={handleDeleteUser}
                userId={userToDeleteId}
            />
        </div>
    );
};

export default HomePage;

HomePage.propTypes = {
    users: PropTypes.array
};
