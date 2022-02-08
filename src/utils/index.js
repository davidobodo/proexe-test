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

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
};

export const getComparator = (order, orderBy) => {
    if (order === "desc") {
        return (a, b) => descendingComparator(a, b, orderBy);
    } else {
        return (a, b) => -descendingComparator(a, b, orderBy);
    }
};
