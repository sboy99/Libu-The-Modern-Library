import { apiState, initialState } from "../features/ApiSlice";
import type { PayloadAction } from "@reduxjs/toolkit";

export const startLoading = (state: apiState) => {
  state.isLoading = true;
};
export const stopLoading = (state: apiState) => {
  state.isLoading = false;
};
export const startFallingBack = (state: apiState) => {
  state.isFallingBack = true;
};
export const stopFallingBack = (state: apiState) => {
  state.isFallingBack = false;
};
export const resetState = (state: apiState) => {
  state = initialState;
};
