import React from "react";

type StrachedBorderProps = {
  children: React.ReactNode;
  className?: string;
  styles?: string;
  breadth?: number;
};

const StreachedBorder: React.FC<StrachedBorderProps> = ({
  children,
  className,
  styles = null,
  breadth = null,
}) => {
  const hpx = breadth ? `h-[${breadth}px]` : `h-px`;
  const wpx = breadth ? `w-[${breadth}px]` : `w-px`;

  return (
    <div className={` relative ${className && className}`}>
      <div
        className={`absolute -inset-x-16 bottom-0 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] ${
          styles ? `${styles}` : `bg-skin-inverted/20`
        } ${hpx}
        }`}
      ></div>
      <div
        className={`absolute -inset-x-16 top-0 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)] ${
          styles ? `${styles}` : `bg-skin-inverted/20`
        } ${hpx}
        }`}
      ></div>
      <div
        className={`absolute -inset-y-16 left-0 [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] ${
          styles ? `${styles}` : `bg-skin-inverted/20`
        } ${wpx}
        }`}
      ></div>
      <div
        className={`absolute -inset-y-16 right-0 [mask-image:linear-gradient(to_bottom,transparent,white_4rem,white_calc(100%-4rem),transparent)] ${
          styles ? `${styles}` : `bg-skin-inverted/20`
        } ${wpx}
        }`}
      ></div>
      {children}
    </div>
  );
};

export default StreachedBorder;
