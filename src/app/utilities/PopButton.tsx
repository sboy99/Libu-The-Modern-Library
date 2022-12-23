import { Popover } from "@headlessui/react";
import React from "react";

type Props = {
  as?: React.ElementType;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

const PopButton: React.FC<Props> = ({
  as,
  children,
  onClick,
  className,
}): JSX.Element => {
  return (
    <Popover.Button
      as={as ?? "button"}
      onClick={onClick}
      className={`rounded-full px-6 py-2 font-lexend font-semibold capitalize outline-none ${className}`}
    >
      {children}
    </Popover.Button>
  );
};

export default PopButton;
