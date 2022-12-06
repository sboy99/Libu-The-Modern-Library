import React from "react";
import { useTheme } from "../store";

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  //
  const { darkMode } = useTheme();
  return <div className={`relative ${darkMode && `dark`}`}>{children}</div>;
};

export default AppWrapper;
