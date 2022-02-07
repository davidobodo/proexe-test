import React from "react";
import { CustomTable } from "../../components/table";
import { UserForm } from "../../components/userForm";
const HomePage = () => {
    return (
        <div style={{ padding: "50px" }}>
            {/* <CustomTable /> */}
            <UserForm />
        </div>
    );
};

export default HomePage;
