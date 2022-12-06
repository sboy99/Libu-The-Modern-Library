import { ThemeState } from "../features/ThemeSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const toggleTheme = (state: ThemeState) => {
  if (state.darkMode) {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
  state.darkMode = !state.darkMode;
};

export const setWindowWidth = (
  state: ThemeState,
  action: PayloadAction<number>
) => {
  state.windowWidth = action.payload;
};
