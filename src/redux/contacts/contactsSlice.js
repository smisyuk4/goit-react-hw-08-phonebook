import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
    itemChange: {},
    isChange: false,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setContacts: (state, action) => {
            state.items = action.payload.data;
            state.isLoading = action.payload.isLoading;
            state.error = action.payload.error;
            // state.isChange = false;
        },
        removeContacts: (state, action) => {
            state.items = [];
            state.isLoading = false;
            state.error = null;
            state.itemChange = {};
            state.isChange = false;
        },
        addContact: (state, action) => {
            state.items.push(action.payload.data);
            // state.isLoading = action.payload.isLoading;
            // state.error = action.payload.error;
        },
        deleteContact: (state, action) => {
            const index = state.items.findIndex(
                contact => contact.id === action.payload.data.id
            );
            state.items.splice(index, 1);
            // state.isLoading = action.payload.isLoading;
            // state.error = action.payload.error;
        },
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

export const { setContacts, removeContacts, addContact, deleteContact, changeContact, clearChange } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;