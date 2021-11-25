import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import rootReducer from './rootReducer'
import { persistReducer } from 'redux-persist'

const persistConfig = {
    key: 'root',
    storage,
}

const persistedRootReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedRootReducer,
})

export default store;