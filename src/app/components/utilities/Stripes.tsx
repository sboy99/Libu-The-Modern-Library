import React from "react";

type StripeProps = {
  className?: string;
  id: string;
};

const Stripes: React.FC<StripeProps> = ({ className, id }) => {
  return (
    <div
      className={`z-0 [mask-image:radial-gradient(circle,white,transparent)] ${
        className ?? className
      }`}
    >
      <svg aria-hidden="true" className="absolute inset-0 h-full w-full">
        <defs>
          <pattern
            id={id}
            width="128"
            height="128"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="100%"
          >
            <path d="M0 128V.5H128" fill="none" stroke="currentColor"></path>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`}></rect>
      </svg>
    </div>
  );
};

export default Stripes;
