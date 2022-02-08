import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { CustomInput } from "../input";
import { useStyles } from "./styles";
import { handleCheckEmailValidity } from "../../utils";
import { createNewUser, editOneUser } from "../../store/actionCreators";

export const UserForm = ({ sentUserData }) => {
    const history = useHistory();
    const dispatch = useDispatch();
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
        }
        // {
        //     id: "username",
        //     label: "Username",
        //     required: false,
        //     value: username
        // },
        // {
        //     id: "street",
        //     label: "Street",
        //     required: false,
        //     value: street
        // },
        // {
        //     id: "suite",
        //     label: "Suite",
        //     required: false,
        //     value: suite
        // },
        // {
        //     id: "city",
        //     label: "City",
        //     required: false,
        //     value: city
        // },
        // {
        //     id: "zipcode",
        //     label: "Zipcode",
        //     required: false,
        //     value: zipcode
        // }
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

        const { name, email } = inputFields;
        const data = {
            name,
            email,
            username: name.toLowerCase(),
            address: {
                street: "Kulas Light",
                suite: "Apt. 556",
                city: "Gwenborough",
                zipcode: "92998-3874",
                geo: {
                    lat: "-37.3159",
                    lng: "81.1496"
                }
            },
            phone: "1-770-736-8031 x56442",
            website: "hildegard.org",
            company: {
                name: "Romaguera-Crona",
                catchPhrase: "Multi-layered client-server neural-net",
                bs: "harness real-time e-markets"
            }
        };

        if (sentUserData) {
            data.id = sentUserData.id; //since id doesnt change
            dispatch(
                editOneUser(data, () => {
                    history.push("/");
                })
            );
        } else {
            dispatch(createNewUser(data));
        }
    };

    const onCancel = () => {
        history.push("/");
    };

    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (name.trim().length > 0 && email.trim().length > 0 && handleCheckEmailValidity(email)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, email]);

    useEffect(() => {
        if (sentUserData) {
            const { name, email } = sentUserData;
            setInputFields({
                name,
                email
            });
        }
    }, [sentUserData]);
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
                    <Button variant="contained" onClick={onCancel}>
                        Cancel
                    </Button>
                    <Button variant="contained" type="submit" disabled={isDisabled}>
                        {sentUserData ? "Save" : "Submit"}
                    </Button>
                </footer>
            </form>
        </Paper>
    );
};

UserForm.propTypes = {
    sentUserData: PropTypes.object
};
