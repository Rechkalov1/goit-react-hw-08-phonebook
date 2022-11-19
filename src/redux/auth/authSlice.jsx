import { createSlice } from '@reduxjs/toolkit';
import * as authOperation from './authOperation';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLogin: false,
  isCurrentUser: false,
  error: null,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [authOperation.register.fulfilled]: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLogin = true;
    },
    [authOperation.logIn.fulfilled]: (state, actions) => {
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLogin = true;
    },

    [authOperation.logOut.fulfilled]: (state, actions) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
    },

    [authOperation.authCurrentUser.pending]: (state, actions) => {
      state.isFetchingCurrentUser = true;
    },

    [authOperation.authCurrentUser.fulfilled]: (state, actions) => {
      state.user = actions.payload;
      state.isLogin = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperation.authCurrentUser.rejected]: (state, actions) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLogin = false;
      state.isFetchingCurrentUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};
export const authPersistReducer = persistReducer(
  authPersistConfig,
  authReducer
);
