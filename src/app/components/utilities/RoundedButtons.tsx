import React from "react";

type Props = {
  text: string;
  onClick?: () => void;
  className?: string;
};

const RoundedButtons: React.FC<Props> = ({
  text,
  onClick,
  className,
}): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-2 font-lexend font-semibold capitalize outline-none ${className}`}
    >
      {text}
    </button>
  );
};

export default RoundedButtons;
