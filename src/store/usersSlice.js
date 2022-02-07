import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoadingUsers: false,
    loadingUsersError: null
};

export const usersSlice = createSlice({
    name: "usersVault",
    initialState,
    reducers: {
        loadAllUsers: (state) => {
            state = {
                ...state,
                isLoadingUsers: true
            };
            return state;
        },
        populateUsersList: (state, action) => {
            state = {
                ...state,
                isLoadingUsers: false,
                users: action.payload
            };
            return state;
        },
        populateUsersListErrored: (state, action) => {
            state = {
                ...state,
                isLoadingUsers: false,
                loadingUsersError: action.payload
            };
            return state;
        },
        resetUsersVault: () => {
            return initialState;
        }
    }
});

export const { loadAllUsers, populateUsersList, resetUsersVault, populateUsersListErrored } = usersSlice.actions;

export default usersSlice.reducer;
