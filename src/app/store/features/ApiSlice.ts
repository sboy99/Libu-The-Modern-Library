import { createSlice } from "@reduxjs/toolkit";
import {
  startFallingBack,
  stopFallingBack,
  startLoading,
  stopLoading,
  resetState,
} from "../reducers/ApiReducer";

export interface apiState {
  isFallingBack: boolean;
  isLoading: boolean;
  response: {
    isSuccess: boolean;
    isError: boolean;
    message: string;
  };
}

export const initialState: apiState = {
  isFallingBack: false,
  isLoading: false,
  response: {
    isSuccess: false,
    isError: false,
    message: ``,
  },
};

const ApiSlice = createSlice({
  name: `ApiService`,
  initialState,
  reducers: {
    startFallingBack,
    stopFallingBack,
    startLoading,
    stopLoading,
    resetState,
  },
});

export default ApiSlice;
