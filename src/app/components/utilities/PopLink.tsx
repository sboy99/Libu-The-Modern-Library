import { Popover } from '@headlessui/react';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  to: string;
  className?: string;
};

const PopLink: React.FC<Props> = ({ children, to, className }): JSX.Element => {
  return (
    <Popover.Button
      as={Link}
      to={to}
      className={clsx(
        `rounded-full px-6 py-2 font-lexend font-semibold capitalize outline-none`,
        className
      )}
    >
      {children}
    </Popover.Button>
  );
};

export default PopLink;
