import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { Reducers } from './features';

export const store = configureStore({
  reducer: {
    api: Reducers.ApiReducer,
    theme: Reducers.ThemeReducer,
    layout: Reducers.LayoutReducer,
    user: Reducers.UserReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// hooks
export const useApi = () => useSelector((state: RootState) => state.api);
export const useTheme = () => useSelector((state: RootState) => state.theme);
export const useLayout = () => useSelector((state: RootState) => state.layout);
export const useUser = () => useSelector((state: RootState) => state.user);
