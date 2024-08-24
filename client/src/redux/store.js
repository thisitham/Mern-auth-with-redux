import {combineReducers, configureStore} from '@reduxjs/toolkit'
import userReducerSlice from './user/userSlice';
import {persistReducer,persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//redux presist use to save the state of a Redux store between sessions
//means can store data inside local storage between session like

const rootReducer = combineReducers({ //presist use krddi use krnna wenawa slices store krnna // because meka kelinma store ekata danna be //this is also like (configureStore)
    user : userReducerSlice
})

const persistConfig = {
    key: 'root', //this is key name for presisted data //'root' is a common choice, you can use any string
    version: 1, //This indicates the version of the persisted data.
    storage, //where the Redux state will be saved.(localStorage)
}

const persistedReducer = persistReducer(persistConfig, rootReducer) //slices and persistConfig combined

export const store = configureStore({
    //reducer: {user : userReducerSlice },
    reducer: persistedReducer, //then import inside store both slices and persist
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store) //export store as persistStore

//an remember using exported persist need to wrap main.js <App/>