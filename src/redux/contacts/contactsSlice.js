import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: null,
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
        },
        setFilter: (state, action) => {
            console.log(action.payload)
            state.filter = action.payload
        }
    },
});

export const { changeContact, clearChange, setFilter } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;