import React, { useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { CustomTable } from "../../components/table";
import { DeleteModal } from "../../components/modal";
import { deleteOneUser } from "../../store/actionCreators";
const HomePage = ({ users, history }) => {
    const dispatch = useDispatch();
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
    return (
        <div style={{ padding: "50px" }}>
            <CustomTable data={users} onDeleteUser={onDeleteUser} onEditUser={onEditUser} />

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
