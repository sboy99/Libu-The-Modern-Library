import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../interfaces/StoreInterface';

import { getUser, loginUser, logoutUser } from '../api/authentication';
import { resetUser } from '../reducers/userReducer';

const initialState: IUser = {
  authState: 'DEAUTHENTIC',
  user: null,
  profile: null,
};

const UserSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    resetUser,
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state) => {
      state.authState = 'SIGN_IN';
    });
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.authState = 'LOG_OUT';
      state.user = null;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.user = action.payload?.user ? action.payload.user : null;
      // todo: add check if user is verified;
      state.authState = 'VERIFIED_AUTHENTIC';
    });
    builder.addCase(getUser.rejected, (state) => {
      state.user = null;
      state.authState = 'DEAUTHENTIC';
    });
  },
});

export default UserSlice;
