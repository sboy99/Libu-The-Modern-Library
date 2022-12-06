import { NavLinks } from "../../../data";
import { NavLink } from "react-router-dom";

const Links = (): JSX.Element => {
  return (
    <ul className="hidden items-center px-4 lg:flex">
      {NavLinks.map((link, index) => (
        <NavLink
          to={link.to}
          end
          key={index}
          className={({ isActive }) =>
            `rounded-md px-3 py-1 font-semibold ${
              isActive
                ? `bg-cyan-200/20 text-cyan-500 dark:bg-high-dark/10 dark:text-yellow-400`
                : `text-slate-500 hover:text-cyan-500 dark:text-slate-300 dark:hover:text-yellow-400`
            }`
          }
        >
          {link.title}
        </NavLink>
      ))}
    </ul>
  );
};

export default Links;
