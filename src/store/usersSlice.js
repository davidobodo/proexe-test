import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoadingUsers: false,
    loadingUsersError: null,
    isCreatingUser: false,
    isDeletingUser: false
};

export const usersSlice = createSlice({
    name: "usersVault",
    initialState,
    reducers: {
        //---------------------------------------
        //LOAD USERS
        //---------------------------------------
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
        //---------------------------------------
        //CREATE USER
        //---------------------------------------
        createUserStart: (state) => {
            state = {
                ...state,
                isCreatingUser: true
            };

            return state;
        },
        createUserSuccess: (state, action) => {
            state = {
                ...state,
                isCreatingUser: false,
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
        //---------------------------------------
        //DELETE USER
        //---------------------------------------
        deleteUserStart: (state) => {
            state = {
                ...state,
                isDeletingUser: true
            };

            return state;
        },
        deleteUserSuccess: (state, action) => {
            const userIdToRemove = action.payload;
            const clonedState = JSON.parse(JSON.stringify(state.users));
            const updatedUsers = clonedState.filter((item) => item.id !== userIdToRemove);

            state = {
                ...state,
                isDeletingUser: false,
                users: updatedUsers
            };

            return state;
        },
        deleteUserFail: (state, action) => {
            state = {
                ...state,
                isDeletingUser: false
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
    createUserSuccess,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFail
} = usersSlice.actions;

export default usersSlice.reducer;
