import React from "react";
import { UserForm } from "../../components/userForm";

const FormPage = ({ location }) => {
    return (
        <div>
            <UserForm sentUserData={location.state} />
        </div>
    );
};

export default FormPage;
