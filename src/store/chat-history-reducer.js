import { createReducer } from '@reduxjs/toolkit';
import history from '../data/chats.json';
import {addToChatHistory, addToContactsList} from './history-action';

export const chatHistoryReducer = createReducer(history, {
    [addToChatHistory]: (state, { payload: { id, newMessage } }) => {
      state[id].messages = [...state[id].messages, newMessage]
    },
    [addToContactsList]: (state, { payload: { name, image } }) => {
      const nextId = Object.keys(state).length;
      state[nextId] = {id: nextId, name, image, messages: []}
    }
  }
)
