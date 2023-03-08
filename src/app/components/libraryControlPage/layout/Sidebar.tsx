import { sidebarItems } from '@/app/data/admin/sidebar';
import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Sidebar: FC = () => {
  return (
    <div className="max-h-96 min-h-64 w-full overflow-y-auto rounded-md border border-skin-base bg-skin-base">
      <div className="py-4">
        {/* sidebar items */}
        <div className="flex-auto ">
          <SidebarItems />
        </div>
      </div>
      <div className="relative m-6 border-t border-skin-base/50 p-4">
        <p className="capitalize text-skin-muted">© 2022 libu</p>
      </div>
    </div>
  );
};

export default Sidebar;

function SidebarItems() {
  const { pathname } = useLocation();
  return (
    <ul className="flex flex-col ">
      {sidebarItems.map((link, index) => (
        <NavLink
          to={link.to}
          end
          key={index}
          className={({ isActive }) =>
            `flex items-center gap-x-4 py-1.5 pl-6 text-lg font-semibold tracking-tight ${
              isActive
                ? `border-r-2 border-skin-accent text-skin-accent `
                : `text-skin-muted hover:text-skin-accent-hover`
            }`
          }
        >
          {pathname === link.to ? (
            <link.activeIcon className="h-6 w-6" />
          ) : (
            <link.icon className="h-6 w-6" />
          )}
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
}
