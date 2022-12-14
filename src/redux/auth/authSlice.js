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
  isLoading: false,
};
const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [authOperation.register.pending](state) {
      state.isLoading = true;
    },
    [authOperation.register.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLogin = true;
    },
    [authOperation.register.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperation.logIn.pending](state) {
      state.isLoading = true;
    },
    [authOperation.logIn.fulfilled]: (state, actions) => {
      state.isLoading = false;
      state.user = actions.payload.user;
      state.token = actions.payload.token;
      state.isLogin = true;
    },
    [authOperation.logIn.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperation.logOut.pending](state) {
      state.isLoading = true;
    },
    [authOperation.logOut.fulfilled]: (state, actions) => {
      state.user = { name: null, email: null };
      state.token = '';
      state.isLogin = false;
    },
    [authOperation.logOut.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    [authOperation.authCurrentUser.pending]: (state, actions) => {
      state.isCurrentUser = true;
    },

    [authOperation.authCurrentUser.fulfilled]: (state, actions) => {
      state.user = actions.payload;
      state.isLogin = true;
      state.isCurrentUser = false;
    },
    [authOperation.authCurrentUser.rejected]: (state, actions) => {
      state.isLogin = false;
      state.isCurrentUser = false;
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
