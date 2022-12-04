import React from "react";

type Props = {
  children: JSX.Element;
};

const AppWrapper: React.FunctionComponent<Props> = ({ children }) => {
  //
  return <div className="relative">{children}</div>;
};

export default AppWrapper;
