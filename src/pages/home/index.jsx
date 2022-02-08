import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { CustomTable } from "../../components/table";
import { DeleteModal } from "../../components/modal";
import { BackdropWithLoader } from "../../components/loader";
import { deleteOneUser } from "../../store/actionCreators";
import { useStyles } from "../styles";

const HomePage = ({ history }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const users = useSelector((state) => state.usersVault.users);
    const isLoadingUsers = useSelector((state) => state.usersVault.isLoadingUsers);
    const isDeletingUser = useSelector((state) => state.usersVault.isDeletingUser);

    const [userToDeleteId, setUserToDeleteId] = useState("");

    const onEditUser = (userData) => {
        history.push({
            pathname: "/form",
            state: userData
        });
    };

    const onCloseModal = () => {
        setUserToDeleteId("");
    };

    const onDeleteUser = (id) => {
        setUserToDeleteId(id);
    };

    const handleDeleteUser = (userId) => {
        dispatch(
            deleteOneUser(userId, () => {
                onCloseModal();
            })
        );
    };

    const onAddNewUser = () => {
        history.push("/form");
    };

    if (isLoadingUsers) {
        return <BackdropWithLoader hasLabel={true} label="Loading users..." />;
    }

    return (
        <section className={classes.pageWrapper}>
            <h1 className={classes.pageTitle}>Dashboard</h1>
            <section className={classes.sectionContainer}>
                <header className={classes.sectionContainerHeader}>
                    <h2>Users List</h2>
                    <Button variant="contained" onClick={onAddNewUser}>
                        Add New User
                    </Button>
                </header>
                <div className={classes.sectionContainerBody}>
                    <CustomTable data={users} onDeleteUser={onDeleteUser} onEditUser={onEditUser} />
                </div>
            </section>
            <DeleteModal
                open={!!userToDeleteId}
                handleClose={onCloseModal}
                handleDeleteUser={handleDeleteUser}
                userId={userToDeleteId}
                isDeletingUser={isDeletingUser}
            />
        </section>
    );
};

export default HomePage;

HomePage.propTypes = {
    users: PropTypes.array
};
