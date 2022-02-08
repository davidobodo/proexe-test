import React from "react";
import { UserForm } from "../../components/userForm";
import { useStyles } from "../home/styles";
const FormPage = ({ location }) => {
    const classes = useStyles();

    return (
        <section className={classes.pageWrapper}>
            <h1 className="page-title">Dashboard</h1>
            <section className={classes.sectionContainer}>
                <header className="header">
                    <h2>Form</h2>
                </header>
                <div className="table-wrapper">
                    <UserForm sentUserData={location.state} />
                </div>
            </section>
        </section>
    );
};

export default FormPage;
