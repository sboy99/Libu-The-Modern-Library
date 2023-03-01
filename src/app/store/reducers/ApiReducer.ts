/* eslint-disable @typescript-eslint/no-unused-vars */
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IApiState } from '../interfaces/StoreInterface';

export const startLoading = (state: IApiState) => {
  state.isLoading = true;
};
export const stopLoading = (state: IApiState) => {
  state.isLoading = false;
};
export const startFormLoading = (state: IApiState) => {
  state.isFormLoading = true;
};
export const stopFormLoading = (state: IApiState) => {
  state.isFormLoading = false;
};

export const setApiResponse = (
  state: IApiState,
  actions: PayloadAction<
    IApiState['response'] & { errors?: IApiState['errors'] }
  >
) => {
  if (actions.payload && actions.payload.message && actions.payload.type) {
    state.response.type = actions.payload.type;
    state.response.message = actions.payload.message;
  }
  if (actions.payload.errors) {
    state.errors = actions.payload.errors;
  }
};

export const resetApiResponse = (state: IApiState) => {
  state.errors = undefined;
  state.response.type = null;
  state.response.message = null;
};
