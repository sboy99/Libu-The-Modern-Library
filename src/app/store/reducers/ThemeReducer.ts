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
  state.isSyncWithSystem = false;
};

export const enableSyncWithSystem = (state: ThemeState) => {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const themeCode = isDarkMode ? `defaultDark` : `defaultLight`;
  const themeName = isDarkMode ? `Night Mode` : `Day Mode`;
  state.theme = themeCode;
  state.title = themeName;
  state.isSyncWithSystem = true;
  window.localStorage.clear();
};
export const diableSyncWithSystem = (state: ThemeState) => {
  state.isSyncWithSystem = false;
};

export const setWindowWidth = (
  state: ThemeState,
  action: PayloadAction<number>
) => {
  state.windowWidth = action.payload;
};
