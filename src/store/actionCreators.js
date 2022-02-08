import {
    loadAllUsers,
    populateUsersList,
    populateUsersListErrored,
    createUserFail,
    createUserStart,
    createUserSuccess,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFail,
    editUserFail,
    editUserStart,
    editUserSuccess
} from "./usersSlice";
import { showSuccessToast } from "../utils";

const USERS_LIST_API = "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data";

export const fetchAllUsers = () => async (dispatch) => {
    dispatch(loadAllUsers());

    try {
        const res = await fetch(USERS_LIST_API);
        const data = await res.json();
        dispatch(populateUsersList(data));
    } catch (err) {
        dispatch(populateUsersListErrored(err));
    }
};

export const createNewUser = (values, cb) => async (dispatch) => {
    dispatch(createUserStart());

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();
        dispatch(createUserSuccess(data));
        showSuccessToast("User created successfully");
        cb();
    } catch (err) {
        dispatch(createUserFail(err));
    }
};

export const deleteOneUser = (id, cb) => async (dispatch) => {
    dispatch(deleteUserStart());

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        await res.json();

        dispatch(deleteUserSuccess(id));
        showSuccessToast("User deleted successfully");

        cb();
    } catch (err) {
        dispatch(deleteUserFail());
    }
};

export const editOneUser = (values, cb) => async (dispatch) => {
    dispatch(editUserStart());

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${values.id}`, {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });
        const data = await res.json();

        dispatch(editUserSuccess(data));
        showSuccessToast("User edited successfully");
        cb();
    } catch (err) {
        dispatch(editUserFail());
    }
};
