import {createAction} from '@reduxjs/toolkit';

export const addToChatHistory = createAction('history/add', (id, newMessage) => {
  return {
    payload: {
      id,
      newMessage,
    }
  }
});

export const addToContactsList = createAction('contacts/add', (name, image) => {
  return {
    payload: {
      name,
      image,
    }
  }
});
