import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null, 
    token: null, 
    isLoggedIn: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, token} = action.payload.data;
            state.user = user;
            state.token = token;
            state.isLoggedIn = true;
        },
        setLogout: (state, action) => {           
            state.user = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setCredentials, setLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;