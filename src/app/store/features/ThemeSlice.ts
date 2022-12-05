import { createSlice } from "@reduxjs/toolkit";
import { toggleTheme } from "../reducers/ThemeReducer";

export type ThemeState = {
  darkMode: boolean;
};

const initialState: ThemeState = {
  darkMode: window.localStorage.getItem("theme") === `dark` ? true : false,
};

const ThemeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    toggleTheme,
  },
});

export default ThemeSlice;
