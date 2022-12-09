import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../store";
import { Actions } from "../store/features";

export const useThemeDetector = (): boolean => {
  const { isSyncWithSystem } = useTheme();
  const dispatch = useDispatch();
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(getCurrentTheme());

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
