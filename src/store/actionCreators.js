import {
    loadAllUsersStart,
    loadAllUsersSuccess,
    loadAllUsersFail,
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
const JSON_PLACEHOLDER_API = "https://jsonplaceholder.typicode.com";

export const fetchAllUsers = () => async (dispatch) => {
    dispatch(loadAllUsersStart());

    try {
        const res = await fetch(USERS_LIST_API);
        if (res.ok) {
            const data = await res.json();
            dispatch(loadAllUsersSuccess(data));
        } else {
            //Note: Due to the nature of the app, we can hardly ever have an error, but its still a good to have
            throw res;
        }
    } catch (err) {
        dispatch(loadAllUsersFail());
    }
};

/**
 *
 * @param {object} values This is an object that has the data of the user to be created
 * @param {function} cb This is a function to be called when the creation is successful
 */
export const createNewUser = (values, cb) => async (dispatch) => {
    dispatch(createUserStart());

    try {
        const res = await fetch(`${USERS_LIST_API}/posts`, {
            method: "POST",
            body: JSON.stringify(values),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (res.ok) {
            const data = await res.json();
            dispatch(createUserSuccess(data));
            showSuccessToast("User created successfully");
            cb();
        } else {
            //Note: Due to the nature of the app, we can hardly ever have an error, but its still a good to have
            throw res;
        }
    } catch (err) {
        dispatch(createUserFail());
    }
};

/**
 *
 * @param {string} id The id of the user to be deleted
 * @param {function} cb This is a function to be called when the creation is successful
 */
export const deleteOneUser = (id, cb) => async (dispatch) => {
    dispatch(deleteUserStart());

    try {
        const res = await fetch(`${JSON_PLACEHOLDER_API}/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (res.ok) {
            await res.json();
            dispatch(deleteUserSuccess(id));
            showSuccessToast("User deleted successfully");
            cb();
        } else {
            //Note: Due to the nature of the app, we can hardly ever have an error, but its still a good to have
            throw res;
        }
    } catch (err) {
        dispatch(deleteUserFail());
    }
};

/**
 *
 * @param {object} values This is an object that has the data of the user to be edited
 * @param {function} cb This is a function to be called when the creation is successful
 */
export const editOneUser = (values, cb) => async (dispatch) => {
    dispatch(editUserStart());

    try {
        const res = await fetch(`${JSON_PLACEHOLDER_API}/posts/${values.id}`, {
            method: "PUT",
            body: JSON.stringify(values),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });

        if (res.ok) {
            const data = await res.json();
            dispatch(editUserSuccess(data));
            showSuccessToast("User edited successfully");
            cb();
        } else {
            //Note: Due to the nature of the app, we can hardly ever have an error, but its still a good to have
            throw res;
        }
    } catch (err) {
        dispatch(editUserFail());
    }
};
