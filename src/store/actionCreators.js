import {
    loadAllUsers,
    populateUsersList,
    resetUsersVault,
    populateUsersListErrored,
    createUserFail,
    createUserStart,
    createUserSuccess
} from "./usersSlice";

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

export const createNewUser = (values) => async (dispatch) => {
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

        const _data = {
            ...data,
            id: new Date().getTime()
        };

        dispatch(createUserSuccess(_data));
    } catch (err) {
        dispatch(createUserFail());
    }
};
