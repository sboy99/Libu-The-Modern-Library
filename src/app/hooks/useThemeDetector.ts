import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../store";
import { Actions } from "../store/features";
import { validThemes, validNames } from "../data/Theme";

export const useThemeDetector = (): boolean => {
  const { isSyncWithSystem } = useTheme();
  const dispatch = useDispatch();

  const getManualThemeCode = (): string | null =>
    window.localStorage.getItem("themeCode");
  const getManualThemeName = (): string | null =>
    window.localStorage.getItem("themeName");

  useEffect(() => {
    if (getManualThemeCode()) {
      dispatch(Actions.diableSyncWithSystem());

      let currThemeCode = getManualThemeCode() ?? `defaultLight`;
      currThemeCode = validThemes.includes(currThemeCode)
        ? currThemeCode
        : `defaultLight`;

      let currThemeName = getManualThemeName() ?? `Default Light`;
      currThemeName = validNames.includes(currThemeName)
        ? currThemeName
        : `Default Light`;

      dispatch(Actions.setTheme({ code: currThemeCode, title: currThemeName }));
    }
  }, []);

  const getCurrentSystemTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(getCurrentSystemTheme());

  const mediaQueryListener = (e: MediaQueryListEvent) => {
    const darkMode = e.matches;
    if (isSyncWithSystem) {
      const themeCode = darkMode ? `defaultDark` : `defaultLight`;
      const themeName = darkMode ? `Night Mode` : `day Mode`;
      dispatch(Actions.setTheme({ code: themeCode, title: themeName }));
    }
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
