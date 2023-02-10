import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    isLoading: false,
    error: null,
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {
        setContacts: (state, action) => {
            console.log(action.payload)
            state.items = action.payload.data;
            state.isLoading = action.payload.isLoading;
            state.error = action.payload.error;
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
        }
    },
});

export const { setContacts, addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;