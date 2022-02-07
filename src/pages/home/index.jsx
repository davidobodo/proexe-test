import React from "react";
import PropTypes from "prop-types";
import { CustomTable } from "../../components/table";
import { UserForm } from "../../components/userForm";

const HomePage = ({ users }) => {
    return (
        <div style={{ padding: "50px" }}>
            <CustomTable data={users} />
            <UserForm />
        </div>
    );
};

export default HomePage;

HomePage.propTypes = {
    users: PropTypes.array
};
