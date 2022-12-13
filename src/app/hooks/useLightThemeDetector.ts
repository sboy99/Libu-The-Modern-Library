import React from "react";
import { useTheme } from "../store";

export const useLightThemeDetector = (): boolean => {
  const LIGHT_THEME_REGEX = /light/i;
  const { theme } = useTheme();
  const [isLightTheme, setLightTheme] = React.useState(
    LIGHT_THEME_REGEX.test(theme)
  );

  React.useEffect(() => {
    setLightTheme(LIGHT_THEME_REGEX.test(theme));
  }, [theme]);

  return isLightTheme;
};
