import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "token",
    initialState: null,
    reducers: {
        addToken: {
            reducer(state, action) {
                return action.payload;
            },
        },
    },
});

export const { addToken } = authSlice.actions;
export const authReducer = authSlice.reducer;