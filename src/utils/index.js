import { toast } from "react-toastify";

export const handleCheckEmailValidity = (value) => new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(value);

export const showSuccessToast = (message) => {
    return toast.success(`${message}`, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined
    });
};
