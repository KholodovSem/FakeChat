import {createReducer} from '@reduxjs/toolkit';
import { removeUser, setAuth } from './user-action';

const initState = {
  userAuth: false,
  email: null,
  displayName: null,
  photo: null,
}

export const userReducer = createReducer(initState, {
  [setAuth] : (state, { payload }) => {
    state.userAuth = !state.userAuth;
    state.email = payload.user.email;
    state.displayName = payload.user.displayName;
    state.photo = payload.user.photoURL;
  },
  [removeUser] : (state) => {
    state.userAuth = !state.userAuth;
    state.email = null;
    state.displayName = null;
    state.photo = null;
  }
})

