import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { CustomInput } from "../input";
import { useStyles } from "./styles";
import { handleCheckEmailValidity } from "../../utils";
import { createNewUser, editOneUser } from "../../store/actionCreators";

export const UserForm = ({ sentUserData }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const isCreatingUser = useSelector((state) => state.usersVault.isCreatingUser);
    const isEditingUser = useSelector((state) => state.usersVault.isEditingUser);
    const classes = useStyles();

    /**
     *Added extra input fields to support adding and editing those fields.
     *However since the pdf file specified that the form should contain just name and email, we are displaying just those two
     */
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

    const { name, email } = inputFields;
    const FORM_FIELDS = [
        {
            id: "name",
            label: "Name",
            value: name
        },
        {
            id: "email",
            label: "Email",
            value: email
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

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email } = inputFields;

        /**
         * Created some dummy placeholders to fill the fields that are not displayed in the form
         */
        const data = {
            name,
            email,
            username: name.toLowerCase().trim(),
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
            data.id = sentUserData.id; //since id doesnt change when editing
            dispatch(editOneUser(data, handleRedirectToHome));
        } else {
            dispatch(createNewUser(data, handleRedirectToHome));
        }
    };

    const handleRedirectToHome = () => {
        history.push("/");
    };

    /**
     * To enable or disabled the form submission button
     */
    const [isDisabled, setIsDisabled] = useState(true);
    useEffect(() => {
        if (name.trim().length > 0 && email.trim().length > 0 && handleCheckEmailValidity(email)) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [name, email]);

    /**
     * When page is in edit mode, populate state with the users data to edit
     */
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
        <form noValidate onSubmit={handleSubmit}>
            <div className={classes.formBody}>
                {FORM_FIELDS.map((field) => {
                    const { id, label, value } = field;
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
                <Button
                    variant="outlined"
                    onClick={handleRedirectToHome}
                    style={{ marginRight: "1.2rem" }}
                    sx={{
                        color: (theme) => theme.palette.error.main,
                        borderColor: (theme) => theme.palette.error.main,
                        "&.MuiButtonBase-root:hover": {
                            borderColor: (theme) => theme.palette.error.main,
                            backgroundColor: "transparent"
                        }
                    }}
                >
                    Cancel
                </Button>
                <Button
                    variant="contained"
                    type="submit"
                    disabled={isDisabled || isCreatingUser || isEditingUser}
                    size="large"
                    sx={{
                        backgroundColor: (theme) => theme.palette.success.main,
                        "&.MuiButtonBase-root:hover,&.MuiButtonBase-root:disabled ": {
                            backgroundColor: (theme) => theme.palette.success.main
                        }
                    }}
                >
                    {sentUserData
                        ? isEditingUser
                            ? "Saving..."
                            : "Save"
                        : isCreatingUser
                        ? "Submitting..."
                        : "Submit"}
                </Button>
            </footer>
        </form>
    );
};

UserForm.propTypes = {
    sentUserData: PropTypes.object
};
