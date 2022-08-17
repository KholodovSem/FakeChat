import { configureStore } from '@reduxjs/toolkit';
import { chatHistoryReducer } from './chat-history-reducer';

export const store = configureStore({
  reducer: chatHistoryReducer
})
