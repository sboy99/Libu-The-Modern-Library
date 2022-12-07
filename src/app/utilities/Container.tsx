import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Container: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Container;
