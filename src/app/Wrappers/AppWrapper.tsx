import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../store";
import { Actions } from "../store/features";
import { Hooks } from "../hooks";
import { useLocation } from "react-router-dom";
import { components } from "../components";

const { Loading } = components;

const { useThemeObserver } = Hooks;

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  useThemeObserver();
  const { windowWidth, theme } = useTheme();
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
    if (windowWidth >= 1024) {
      dispatch(Actions.closeSearchBar());
      dispatch(Actions.closeMenu());
    }
  }, [windowWidth]);

  return (
    <div className={`relative ${theme}`}>
      <Loading />
      {children}
    </div>
  );
};

export default AppWrapper;
