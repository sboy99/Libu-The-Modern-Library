import React from "react";
import Glow from "./Glow";

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
  glowId?: string | null;
  glowClass?: string;
};

const Component: React.FC<ComponentProps> = ({
  children,
  className,
  glowId,
  glowClass,
}): JSX.Element => {
  return (
    <div
      className={`relative rounded-md border border-skin-base bg-skin-base p-4 text-skin-base ${className}`}
    >
      {glowId && (
        <Glow id={glowId} className={glowClass ?? `right-0 max-w-4xl`} />
      )}
      {children}
    </div>
  );
};

export default Component;
