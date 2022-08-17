import { createReducer } from '@reduxjs/toolkit';
import history from '../data/chats.json';
import {addToChatHistory} from './history-action';

export const chatHistoryReducer = createReducer(history, {
  [addToChatHistory] : (state, {payload: {id, newMessage}}) => {
    state[id].messages = [...state[id].messages, newMessage]
  }
})
