import { apiState, initialState } from "../features/ApiSlice";
// import type { PayloadAction } from "@reduxjs/toolkit";

export const startLoading = (state: apiState) => {
  state.isLoading = true;
};
export const stopLoading = (state: apiState) => {
  state.isLoading = false;
};
export const resetState = (state: apiState) => {
  state = initialState;
};
