import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Component: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`w-full relative ${className}`}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Component;
