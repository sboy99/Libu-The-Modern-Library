import { ThemeState } from "../features/ThemeSlice";

export const toggleTheme = (state: ThemeState) => {
  if (state.darkMode) {
    window.localStorage.setItem("theme", "light");
  } else {
    window.localStorage.setItem("theme", "dark");
  }
  state.darkMode = !state.darkMode;
};
