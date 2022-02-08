import React from "react";
import PropTypes from "prop-types";
import { UserForm } from "../../components/userForm";
import { useStyles } from "../styles";

const FormPage = ({ location }) => {
    const classes = useStyles();

    return (
        <section className={classes.pageWrapper}>
            <h1 className={classes.pageTitle}>Dashboard</h1>
            <section className={classes.sectionContainer}>
                <header className={classes.sectionContainerHeader}>
                    <h2>Form</h2>
                </header>
                <div className={classes.sectionContainerBody}>
                    <UserForm sentUserData={location.state} />
                </div>
            </section>
        </section>
    );
};

export default FormPage;

FormPage.propTypes = {
    location: PropTypes.object
};
