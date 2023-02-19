import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filter: '',
    itemChange: {},
    isChange: false,
    isAdd: false,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        changeContact: (state, action) => {
            state.itemChange = action.payload;
            state.isChange = true;
        },
        clearChange: (state, action) => {
            state.itemChange = {}
            state.isChange = false;
        },
        setFilter: (state, action) => {
            state.filter = action.payload
        },
        showFormAddContact: (state, action) => {
            state.isAdd = action.payload
        }
    },
});

export const { changeContact, clearChange, setFilter, showFormAddContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;