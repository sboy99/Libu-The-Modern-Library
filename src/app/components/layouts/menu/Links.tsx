import { NavLinks } from "../../../data";
import { NavLink, useLocation } from "react-router-dom";

const Links = (): JSX.Element => {
  const { pathname } = useLocation();
  return (
    <ul className="flex flex-col ">
      {NavLinks.map((link, index) => (
        <NavLink
          to={link.to}
          end
          key={index}
          className={({ isActive }) =>
            `flex items-center gap-x-4 py-1.5 pl-6 text-lg font-semibold tracking-tight ${
              isActive
                ? `border-r-2 border-light-text-accent text-light-text-accent dark:border-dark-text-accent dark:text-dark-text-accent`
                : `text-light-text hover:bg-light-bg-hover dark:text-dark-text dark:hover:bg-dark-bg-hover`
            }`
          }
        >
          {pathname === link.to ? (
            <link.ActiveIcon className="h-6 w-6" />
          ) : (
            <link.Icon className="h-6 w-6" />
          )}
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default Links;
