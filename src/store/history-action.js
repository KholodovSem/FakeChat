import {createAction} from '@reduxjs/toolkit';

export const addToChatHistory = createAction('history/add', (id, newMessage) => {
  return {
    payload: {
      id,
      newMessage,
    }
  }
});
