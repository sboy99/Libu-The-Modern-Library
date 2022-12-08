import { createSlice } from "@reduxjs/toolkit";
import { setTheme, setWindowWidth } from "../reducers/ThemeReducer";

export type ThemeState = {
  windowWidth: number;
  theme: string;
  title: string;
};

const initialState: ThemeState = {
  windowWidth: window.innerWidth,
  theme: `defaultLight`,
  title: `Default Light`,
};

const ThemeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    setTheme,
    setWindowWidth,
  },
});

export default ThemeSlice;
