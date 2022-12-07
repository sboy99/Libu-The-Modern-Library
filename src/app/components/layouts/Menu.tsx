import React from "react";
import Links from "./menu/Links";

const Menu: React.FC = (): JSX.Element => {
  return (
    <menu className="max-h-96 min-h-64 min-w-[16rem] overflow-y-auto rounded-md border border-skin-base bg-skin-base">
      <div className="py-4">
        <Links />
      </div>
      <div className="m-6 border-t border-skin-base p-4">
        <p className="capitalize text-skin-muted">© 2022 libu</p>
      </div>
    </menu>
  );
};

export default Menu;
