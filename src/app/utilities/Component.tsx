import React from "react";

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
};

const Component: React.FC<ComponentProps> = ({
  children,
  className,
}): JSX.Element => {
  return (
    <div
      className={` rounded-md border border-skin-base bg-skin-base p-4 text-skin-base ${className}`}
    >
      {children}
    </div>
  );
};

export default Component;
