import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        inputWrapper: {
            position: "relative",
            flex: 1,

            "&.error": {
                "& input": {
                    borderColor: theme.palette.error.main
                }
            },

            "& .error-message": {
                color: theme.palette.error.main,
                marginTop: "5px",
                position: "absolute"
            }
        }
    };
});

export const CustomInput = ({
    ariaLabel,
    value,
    placeholder,
    id,
    name,
    onChange,
    hasError,
    errorMessage = "Field is required",
    onBlur
}) => {
    const classes = useStyles();
    return (
        <div className={hasError ? classes.inputWrapper + " " + "error" : classes.inputWrapper}>
            <input
                type="text"
                aria-label={ariaLabel}
                value={value}
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange}
                onBlur={onBlur}
            />
            {hasError && <div className="error-message">{errorMessage}</div>}
        </div>
    );
};
