import type { IApiState } from '../interfaces/StoreInterface';

import { createSlice } from '@reduxjs/toolkit';
import {
  resetApiResponse,
  setApiResponse,
  startFormLoading,
  startLoading,
  stopFormLoading,
  stopLoading,
} from '../reducers/ApiReducer';

const initialState: IApiState = {
  isLoading: false,
  isFormLoading: false,
  response: {
    type: null,
    message: null,
  },
};

const ApiSlice = createSlice({
  name: `ApiService`,
  initialState,
  reducers: {
    resetApiResponse,
    setApiResponse,
    startFormLoading,
    stopFormLoading,
    startLoading,
    stopLoading,
  },
});

export default ApiSlice;
