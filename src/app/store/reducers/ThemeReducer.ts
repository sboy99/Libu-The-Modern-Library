import { ThemeState } from "../features/ThemeSlice";
import { PayloadAction } from "@reduxjs/toolkit";

type ThemePayload = {
  code: string;
  title: string;
};

export const setTheme = (
  state: ThemeState,
  action: PayloadAction<ThemePayload>
) => {
  window.localStorage.setItem("themeCode", action.payload.code);
  window.localStorage.setItem("themeName", action.payload.title);
  state.theme = action.payload.code;
  state.title = action.payload.title;
};

export const setWindowWidth = (
  state: ThemeState,
  action: PayloadAction<number>
) => {
  state.windowWidth = action.payload;
};
