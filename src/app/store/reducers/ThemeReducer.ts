import type { PayloadAction } from '@reduxjs/toolkit';
import type { IThemeState } from '../interfaces/StoreInterface';

type ThemePayload = {
  code: string;
  title: string;
};

export const setTheme = (
  state: IThemeState,
  action: PayloadAction<ThemePayload>
) => {
  if (!state.isSyncWithSystem) {
    window.localStorage.setItem('themeCode', action.payload.code);
    window.localStorage.setItem('themeName', action.payload.title);
  }
  state.theme = action.payload.code;
  state.title = action.payload.title;
  state.isSyncWithSystem = false;
};

export const enableSyncWithSystem = (state: IThemeState) => {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const themeCode = isDarkMode ? `defaultDark` : `defaultLight`;
  const themeName = isDarkMode ? `Night Mode` : `Day Mode`;
  state.theme = themeCode;
  state.title = themeName;
  state.isSyncWithSystem = true;
  window.localStorage.clear();
};
export const diableSyncWithSystem = (state: IThemeState) => {
  state.isSyncWithSystem = false;
};

export const setWindowWidth = (
  state: IThemeState,
  action: PayloadAction<number>
) => {
  state.windowWidth = action.payload;
};
