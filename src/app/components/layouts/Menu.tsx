import React from 'react';

import { Glow } from '../utilities';
import Links from './menu/Links';

const Menu: React.FC = (): JSX.Element => {
  return (
    <menu className="max-h-96 min-h-64 w-full overflow-y-auto rounded-md border border-skin-base bg-skin-base">
      <div className="py-4">
        <Links />
      </div>
      <div className="relative m-6 border-t border-skin-base/50 p-4">
        <Glow className="top-0 -left-16" id="MenuBorderGlow" />
        <p className="capitalize text-skin-muted">© 2022 libu</p>
      </div>
    </menu>
  );
};

export default Menu;
