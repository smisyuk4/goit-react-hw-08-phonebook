import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { contactsBaseApi } from "../redux/auth/contactsBaseApi"
import { authReducer } from "./auth/authSlice"

export const store = configureStore({
  reducer: {
    [contactsBaseApi.reducerPath]: contactsBaseApi.reducer,
    token: authReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactsBaseApi.middleware,
  ]    
})

setupListeners(store.dispatch)
