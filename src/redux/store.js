import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from "./auth/apiSlice"
import { authReducer } from "./auth/authSlice"
import { contactsReducer } from './contacts/contactsSlice'
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
}

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: contactsReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    apiSlice.middleware,    
  ],
  devTools: true,
})

export const persistor = persistStore(store)
