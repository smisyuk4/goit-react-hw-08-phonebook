import { createSelector } from "@reduxjs/toolkit";

export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

export const selectItemChange = state => state.contacts.itemChange;
export const selectIsChange = state => state.contacts.isChange;
// export const selectFilter = state => state.filter;

export const selectVisibleContacts = createSelector(
    [selectContacts], 
    (contacts) => contacts
)

// [selectContacts, selectFilter], 
//     (contacts, filter) => {
//         let findName = filter.toLowerCase();

//         return contacts.filter(({ name }) =>
//         name.toLowerCase().includes(findName)
//         );    
//     }