import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLayout, useTheme } from "../store";
import { Actions } from "../store/features";

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  const { darkMode, windowWidth } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      dispatch(Actions.setWindowWidth(Number(window.innerWidth)));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowWidth >= 1024) {
      dispatch(Actions.closeSearchBar());
    }
  }, [windowWidth]);

  return <div className={`relative ${darkMode && `dark`}`}>{children}</div>;
};

export default AppWrapper;
