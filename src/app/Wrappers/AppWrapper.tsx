import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { validThemes } from "../data/Theme";
import { useTheme } from "../store";
import { Actions } from "../store/features";

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  const { windowWidth, theme } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      dispatch(Actions.setWindowWidth(Number(window.innerWidth)));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let themeCode = window.localStorage.getItem("themeCode") || `defaultLight`;
    let themeName = window.localStorage.getItem("themeName") || `Default Light`;
    if (!validThemes.includes(themeCode)) {
      themeCode = "defaultLight";
      themeName = "Default Light";
    }
    dispatch(Actions.setTheme({ code: themeCode, title: themeName }));
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      dispatch(Actions.closeSearchBar());
    }
  }, [windowWidth]);

  return <div className={`relative ${theme}`}>{children}</div>;
};

export default AppWrapper;
