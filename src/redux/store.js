import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { apiSlice } from "./auth/apiSlice"
import { authReducer } from "./auth/authSlice"
import { persistStore, persistReducer} from 'redux-persist' //, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER 
import storage from 'redux-persist/lib/storage'

const authPersistConfig = {
  key: 'auth',
  storage,
  whileList: ['token'],
}

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // auth: authReducer,
    auth: persistReducer(authPersistConfig, authReducer)
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    apiSlice.middleware,    
  ],
  devTools: true,
})

setupListeners(store.dispatch)

export const persistor = persistStore(store)
