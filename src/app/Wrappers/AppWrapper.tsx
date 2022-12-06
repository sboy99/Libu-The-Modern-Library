import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTheme } from "../store";
import { Actions } from "../store/features";

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      dispatch(Actions.setWindowWidth(Number(window.innerWidth)));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <div className={`relative ${darkMode && `dark`}`}>{children}</div>;
};

export default AppWrapper;
