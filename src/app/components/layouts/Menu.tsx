import React from "react";
import Links from "./menu/Links";

const Menu: React.FC = (): JSX.Element => {
  return (
    <menu className="max-h-96 min-h-64 min-w-[16rem] overflow-y-auto rounded-md border border-light-border bg-light-bg dark:border-dark-border dark:bg-dark-bg-deep">
      <div className="py-4">
        <Links />
      </div>
      <div className="m-6 border-t border-light-border p-4 dark:border-dark-border">
        <p className="capitalize text-placeholder-light dark:text-placeholder-dark">
          © 2022 libu
        </p>
      </div>
    </menu>
  );
};

export default Menu;
