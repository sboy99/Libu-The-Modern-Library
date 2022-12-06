import React from "react";
import { Popover, Transition } from "@headlessui/react";

type PopProps = {
  children: React.ReactNode;
  Icon: React.FC<React.ComponentProps<"svg">>;
  iconClass?: string;
  className: string;
};

const Pop: React.FC<PopProps> = ({
  children,
  Icon,
  iconClass,
  className,
}): JSX.Element => {
  return (
    <Popover className={`relative z-0 ${className}`}>
      {/* icon */}
      <Popover.Button
        className={`rounded-full border-none outline-none hover:bg-slate-200 dark:hover:bg-slate-600`}
      >
        {
          <Icon
            className={
              iconClass
                ? iconClass
                : `h-8 w-8 text-slate-700 dark:text-slate-200`
            }
          />
        }
      </Popover.Button>
      {/* panel */}
      <Transition
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-300 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className={`absolute top-10 -right-4 z-20`}>
          <div className="pointer-events-none absolute right-5 h-5 w-5 origin-top-right rotate-45 rounded bg-cyan-500 dark:bg-yellow-400"></div>
          {children}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Pop;