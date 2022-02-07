import { loadAllUsers, populateUsersList, resetUsersVault, populateUsersListErrored } from "./usersSlice";

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
