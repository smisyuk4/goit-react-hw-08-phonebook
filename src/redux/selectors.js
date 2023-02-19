export const selectCurrentUser = state => state.auth.user;
export const selectCurrentToken = state => state.auth.token;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectItemChange = state => state.contacts.itemChange;
export const selectIsChange = state => state.contacts.isChange;
export const selectFilter = state => state.contacts.filter;
export const selectIsAdd = state => state.contacts.isAdd;