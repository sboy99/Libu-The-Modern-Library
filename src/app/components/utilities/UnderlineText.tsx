import React from "react";
import colors from "tailwindcss/colors";

type UnderlineProps = {
  children: React.ReactNode;
  className?: string;
};

const UnderlineText: React.FC<UnderlineProps> = ({ children, className }) => {
  return (
    <span className={`relative pb-1 ${className ?? className}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-x-0 top-full h-1 w-full animate-bg-shift rounded-full"
        style={{
          background: `linear-gradient(-45deg, ${colors.cyan[500]}, ${colors.blue[600]}, ${colors.pink[400]}, ${colors.yellow[400]})`,
          backgroundSize: "400% 400%",
        }}
      ></div>
    </span>
  );
};

export default UnderlineText;
