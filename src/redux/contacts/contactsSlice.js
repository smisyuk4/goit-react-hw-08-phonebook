import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemChange: {},
    isChange: false,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        changeContact: (state, action) => {
            console.log(action.payload);
            state.itemChange = action.payload;
            state.isChange = true;
        },
        clearChange: (state, action) => {
            state.itemChange = {}
            state.isChange = false;
        }
    },
});

export const { changeContact, clearChange } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;