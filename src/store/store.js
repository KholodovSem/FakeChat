import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { chatHistoryReducer } from './chat-history-reducer';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { userReducer } from './user-reducer';

const middleware = [...getDefaultMiddleware({
  serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
  }
})]

const persistConfig = {
  key: "users",
  storage
}

const rootReducer = combineReducers({
  chatHistory: chatHistoryReducer,
  user: userReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware
})

export const persistor = persistStore(store)
