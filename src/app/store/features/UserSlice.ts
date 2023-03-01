import { createSlice } from '@reduxjs/toolkit';
import type { IUser } from '../interfaces/StoreInterface';

import { loginUser } from '../api/authentication';
import { resetUser } from '../reducers/userReducer';

const initialState: IUser = {
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
    builder.addCase(loginUser.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export default UserSlice;
