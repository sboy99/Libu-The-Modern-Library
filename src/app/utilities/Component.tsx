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
      className={` rounded-md border border-light-border bg-light-bg p-4 text-light-text dark:border-dark-border dark:bg-dark-bg-deep dark:text-dark-text ${className}`}
    >
      {children}
    </div>
  );
};

export default Component;
