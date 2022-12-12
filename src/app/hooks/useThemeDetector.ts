import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Actions } from "../store/features";
import { validThemes, validNames } from "../data/Theme";

export const useThemeDetector = (): boolean => {
  const dispatch = useDispatch();

  const getManualThemeCode = (): string | null =>
    window.localStorage.getItem("themeCode");
  const getManualThemeName = (): string | null =>
    window.localStorage.getItem("themeName");

  const getCurrentSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(getCurrentSystemTheme());

  const setTraditionalTheme = () => {
    let themeCode = getManualThemeCode() ?? `defaultLight`;
    themeCode = validThemes.includes(themeCode) ? themeCode : `defaultLight`;

    let themeName = getManualThemeName() ?? `Default Light`;
    themeName = validNames.includes(themeName) ? themeName : `Default Light`;

    dispatch(Actions.setTheme({ code: themeCode, title: themeName }));
  };

  useEffect(() => {
    if (getManualThemeCode()) {
      dispatch(Actions.diableSyncWithSystem());
      setTraditionalTheme();
    } else {
      dispatch(Actions.enableSyncWithSystem());
    }
  }, [isDarkMode]);

  const mediaQueryListener = (e: MediaQueryListEvent) => {
    const darkMode = e.matches;
    setIsDarkMode(darkMode);
  };

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    darkModeMediaQuery.addEventListener("change", mediaQueryListener);
    return () =>
      darkModeMediaQuery.removeEventListener("change", mediaQueryListener);
  }, []);

  return isDarkMode;
};
