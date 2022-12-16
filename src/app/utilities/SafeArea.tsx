import React from "react";

type SafeAreaProps = {
  children: React.ReactNode;
  className?: string;
};

const SafeArea: React.FC<SafeAreaProps> = ({ children, className }) => {
  return (
    <div className={`relative p-4 md:px-20 ${className && className} `}>
      {children}
    </div>
  );
};

export default SafeArea;
