import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { chatHistoryReducer } from './chat-history-reducer';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
})]

const persistConfig = {
  key: "users",
  storage
}

const persistedReducer = persistReducer(persistConfig, chatHistoryReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware
})

export const persistor = persistStore(store)
