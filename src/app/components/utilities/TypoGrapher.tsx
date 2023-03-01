import React from "react";

type validProseSize = "prose-sm" | "prose-base" | "prose-lg" | "prose-xl";

type TypoProps = {
  children: React.ReactNode;
  className?: string;
  proseSize?: validProseSize;
};

const TypoGrapher: React.FC<TypoProps> = ({
  children,
  className,
  proseSize,
}) => {
  return (
    <article
      className={`prose prose-h1:text-skin-base prose-p:leading-6 prose-p:text-skin-muted ${proseSize} ${className}`}
    >
      {children}
    </article>
  );
};

export default TypoGrapher;
