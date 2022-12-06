import { createSlice } from "@reduxjs/toolkit";
import { toggleTheme, setWindowWidth } from "../reducers/ThemeReducer";

export type ThemeState = {
  windowWidth: number;
  darkMode: boolean;
};

const initialState: ThemeState = {
  windowWidth: window.innerWidth,
  darkMode: window.localStorage.getItem("theme") === `dark` ? true : false,
};

const ThemeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    toggleTheme,
    setWindowWidth,
  },
});

export default ThemeSlice;
