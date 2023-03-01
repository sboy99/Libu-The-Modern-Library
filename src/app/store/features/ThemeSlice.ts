import { createSlice } from '@reduxjs/toolkit';
import type { IThemeState } from '../interfaces/StoreInterface';
import {
  diableSyncWithSystem,
  enableSyncWithSystem,
  setTheme,
  setWindowWidth,
} from '../reducers/ThemeReducer';

const initialState: IThemeState = {
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
