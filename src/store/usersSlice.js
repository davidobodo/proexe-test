import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoadingUsers: false,
    loadingUsersError: null,
    isCreatingUser: false
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

        createUserStart: (state) => {
            state = {
                ...state,
                isCreatingUser: false
            };

            return state;
        },
        createUserSuccess: (state, action) => {
            state = {
                ...state,
                isCreatingUser: true,
                users: [...state.users, action.payload]
            };

            return state;
        },
        createUserFail: (state, action) => {
            state = {
                ...state,
                isCreatingUser: false
            };

            return state;
        },
        resetUsersVault: () => {
            return initialState;
        }
    }
});

export const {
    loadAllUsers,
    populateUsersList,
    resetUsersVault,
    populateUsersListErrored,
    createUserFail,
    createUserStart,
    createUserSuccess
} = usersSlice.actions;

export default usersSlice.reducer;
