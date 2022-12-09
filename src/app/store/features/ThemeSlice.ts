import { createSlice } from "@reduxjs/toolkit";
import {
  setTheme,
  setWindowWidth,
  enableSyncWithSystem,
  diableSyncWithSystem,
} from "../reducers/ThemeReducer";

export type ThemeState = {
  windowWidth: number;
  theme: string;
  title: string;
  isSyncWithSystem: boolean;
};

const initialState: ThemeState = {
  windowWidth: window.innerWidth,
  theme: `defaultLight`,
  title: `Default Light`,
  isSyncWithSystem: true,
};

const ThemeSlice = createSlice({
  name: `theme`,
  initialState,
  reducers: {
    setTheme,
    setWindowWidth,
    enableSyncWithSystem,
    diableSyncWithSystem,
  },
});

export default ThemeSlice;
