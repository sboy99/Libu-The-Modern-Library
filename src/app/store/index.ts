import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Reducers } from "./features";

export const store = configureStore({
  reducer: {
    api: Reducers.ApiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks
export const useApi = () => useSelector((state: RootState) => state.api);
