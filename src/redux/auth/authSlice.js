import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const { user, token} = action.payload.data;
            state.user = user;
            state.token = token;
        },
    },
});

export const { setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;