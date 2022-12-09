import { useEffect, useState } from "react";

export const useThemeDetector = (): boolean => {
  const getCurrentTheme = () =>
    window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkMode, setIsDarkMode] = useState(getCurrentTheme());

  const mediaQueryListener = (e: MediaQueryListEvent) => {
    setIsDarkMode(e.matches);
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
