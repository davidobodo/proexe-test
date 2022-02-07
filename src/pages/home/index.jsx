import React from "react";
import PropTypes from "prop-types";
import { CustomTable } from "../../components/table";

const HomePage = ({ users }) => {
    return (
        <div style={{ padding: "50px" }}>
            <CustomTable data={users} />
        </div>
    );
};

export default HomePage;

HomePage.propTypes = {
    users: PropTypes.array
};
