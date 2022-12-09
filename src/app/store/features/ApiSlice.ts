import { createSlice } from "@reduxjs/toolkit";
import { startLoading, stopLoading, resetState } from "../reducers/ApiReducer";

export interface apiState {
  isLoading: boolean;
  response: {
    isSuccess: boolean;
    isError: boolean;
    message: string;
  };
}

export const initialState: apiState = {
  isLoading: false,
  response: {
    isSuccess: false,
    isError: false,
    message: ``,
  },
};

const ApiSlice = createSlice({
  name: `Api Service`,
  initialState,
  reducers: {
    resetState,
  },
});

export default ApiSlice;
