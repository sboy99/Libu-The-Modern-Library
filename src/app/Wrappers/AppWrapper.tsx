import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { validThemes } from "../data/Theme";
import { useTheme } from "../store";
import { Actions } from "../store/features";
import { hooks } from "../hooks";
import { useLocation } from "react-router-dom";
import { components } from "../components";

const { Loading } = components;

const { useThemeDetector } = hooks;

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  const isDarkTheme = useThemeDetector();
  const { windowWidth, theme, isSyncWithSystem } = useTheme();
  const { pathname } = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      dispatch(Actions.setWindowWidth(Number(window.innerWidth)));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    dispatch(Actions.closeMenu());
  }, [pathname]);

  useEffect(() => {
    let themeCode, themeName;
    if (window.localStorage.getItem("themeCode")) {
      dispatch(Actions.diableSyncWithSystem());
      themeCode = window.localStorage.getItem("themeCode") ?? `defaultLight`;
      themeName = window.localStorage.getItem("themeName") ?? `Default Light`;
      if (!validThemes.includes(themeCode)) {
        themeCode = "defaultLight";
        themeName = "Default Light";
      }
    } else {
      if (isDarkTheme) {
        themeCode = `defaultDark`;
        themeName = "Night Mode";
      } else {
        themeCode = `defaultLight`;
        themeName = "Day Mode";
      }
    }
    dispatch(Actions.setTheme({ code: themeCode, title: themeName }));
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      dispatch(Actions.closeSearchBar());
      dispatch(Actions.closeMenu());
    }
  }, [windowWidth]);

  return (
    <div
      className={`relative ${
        isSyncWithSystem
          ? isDarkTheme
            ? `defaultDark`
            : `defaultLight`
          : theme
      }`}
    >
      <Loading />
      {children}
    </div>
  );
};

export default AppWrapper;
