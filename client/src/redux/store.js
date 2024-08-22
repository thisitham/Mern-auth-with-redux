import {configureStore} from '@reduxjs/toolkit'
import userReducerSlice from './user/userSlice';

export const store = configureStore({
    reducer: {user : userReducerSlice },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});