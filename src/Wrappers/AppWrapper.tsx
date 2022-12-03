import React from "react";

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  //
  return <main className="relative">{children}</main>;
};

export default AppWrapper;
