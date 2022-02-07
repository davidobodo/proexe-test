import React, { useState, useEffect } from "react";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { CustomInput } from "../input";
import { useStyles } from "./styles";
import { handleCheckEmailValidity } from "../../utils";
export const UserForm = () => {
    const classes = useStyles();

    const [inputFields, setInputFields] = useState({
        name: "",
        email: "",
        username: "",
        street: "",
        suite: "",
        city: "",
        zipCode: ""
    });
    const [inputFieldsError, setInputFieldsError] = useState({
        name: false,
        email: false
    });
    const [inputFieldsErrorMessage, setInputFieldsErrorMessage] = useState({
        name: "Name is Required",
        email: "Email is Required"
    });
    const { name, email, username, street, suite, city, zipcode } = inputFields;
    const FORM_FIELDS = [
        {
            id: "name",
            label: "Name",
            required: true,
            value: name
        },
        {
            id: "email",
            label: "Email",
            required: true,
            value: email
        },
        {
            id: "username",
            label: "Username",
            required: false,
            value: username
        },
        {
            id: "street",
            label: "Street",
            required: false,
            value: street
        },
        {
            id: "suite",
            label: "Suite",
            required: false,
            value: suite
        },
        {
            id: "city",
            label: "City",
            required: false,
            value: city
        },
        {
            id: "zipcode",
            label: "Zipcode",
            required: false,
            value: zipcode
        }
    ];
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputFields((prevState) => {
            return {
                ...prevState,
                [name]: value
            };
        });
    };

    const handleValidateField = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "name":
                validateName(value);
                break;
            case "email":
                validateEmail(value);
                break;
            default:
                break;
        }
    };

    //---------------------------------------------------
    //Validations
    //---------------------------------------------------
    const validateName = (value) => {
        if (value.trim().length === 0) {
            setInputFieldsErrorMessage((prevState) => {
                return {
                    ...prevState,
                    name: "Name is Required"
                };
            });
            setInputFieldsError((prevState) => {
                return {
                    ...prevState,
                    name: true
                };
            });
        } else {
            setInputFieldsError((prevState) => {
                return {
                    ...prevState,
                    name: false
                };
            });
        }
    };

    const validateEmail = (value) => {
        let errMsg = "";

        //Error checks
        if (value.trim().length === 0) {
            errMsg = "Email is Required";
        } else if (!handleCheckEmailValidity(value)) {
            errMsg = "Please enter a valid email";
        }

        if (errMsg === "") {
            setInputFieldsError((prevState) => {
                return {
                    ...prevState,
                    email: false
                };
            });
        } else {
            setInputFieldsErrorMessage((prevState) => {
                return {
                    ...prevState,
                    email: errMsg
                };
            });
            setInputFieldsError((prevState) => {
                return {
                    ...prevState,
                    email: true
                };
            });
        }
    };

    //---------------------------------------------------
    //Form Submission
    //---------------------------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputFields, "the submitted fields");
    };

    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (name.trim().length > 0 && email.trim().length > 0 && handleCheckEmailValidity(email)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, email]);
    return (
        <Paper sx={{ width: "100%", mb: 2 }}>
            <form noValidate onSubmit={handleSubmit}>
                <h1 className={classes.formHeader}>Form</h1>

                <div className={classes.formBody}>
                    {FORM_FIELDS.map((field) => {
                        const { id, label, required, value } = field;
                        return (
                            <div key={id} className="formField">
                                <label htmlFor={id}>{label}</label>
                                <CustomInput
                                    id={id}
                                    name={id}
                                    placeholder={label}
                                    ariaLabel={label}
                                    value={value}
                                    onChange={handleChange}
                                    hasError={inputFieldsError[id]}
                                    errorMessage={inputFieldsErrorMessage[id]}
                                    onBlur={handleValidateField}
                                />
                            </div>
                        );
                    })}
                </div>

                <footer className={classes.formFooter}>
                    <Button variant="contained">Cancel</Button>
                    <Button variant="contained" type="submit" disabled={isDisabled}>
                        Submit
                    </Button>
                </footer>
            </form>
        </Paper>
    );
};
