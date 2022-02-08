import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
    isLoadingUsers: false,
    loadingUsersError: null,
    isCreatingUser: false,
    isDeletingUser: false,
    isEditingUser: false
};

export const usersSlice = createSlice({
    name: "usersVault",
    initialState,
    reducers: {
        //---------------------------------------
        //LOAD USERS
        //---------------------------------------
        loadAllUsersStart: (state) => {
            state = {
                ...state,
                isLoadingUsers: true
            };
            return state;
        },
        loadAllUsersSuccess: (state, action) => {
            state = {
                ...state,
                isLoadingUsers: false,
                users: action.payload
            };
            return state;
        },
        loadAllUsersFail: (state) => {
            state = {
                ...state,
                isLoadingUsers: false
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
            const newUserData = action.payload;

            //Make the id of newly created user to always be one index more than the current last user's id
            const newUserId = state.users[state.users.length - 1].id + 1;
            newUserData.id = newUserId;

            state = {
                ...state,
                isCreatingUser: false,
                users: [...state.users, newUserData]
            };

            return state;
        },
        createUserFail: (state) => {
            state = {
                ...state,
                isCreatingUser: false
            };

            return state;
        },
        //---------------------------------------
        //EDIT USER
        //---------------------------------------
        editUserStart: (state) => {
            state = {
                ...state,
                isEditingUser: true
            };

            return state;
        },
        editUserSuccess: (state, action) => {
            const clonedStateUsers = JSON.parse(JSON.stringify(state.users));
            const editedUserIndex = clonedStateUsers.findIndex((item) => item.id === action.payload.id);
            clonedStateUsers.splice(editedUserIndex, 1, action.payload);
            state = {
                ...state,
                isEditingUser: false,
                users: clonedStateUsers
            };

            return state;
        },
        editUserFail: (state) => {
            state = {
                ...state,
                isEditingUser: false
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
            const clonedStateUsers = JSON.parse(JSON.stringify(state.users));
            const updatedUsers = clonedStateUsers.filter((item) => item.id !== userIdToRemove);

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
        }
    }
});

export const {
    loadAllUsersStart,
    loadAllUsersSuccess,
    resetUsersVault,
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
} = usersSlice.actions;

export default usersSlice.reducer;
