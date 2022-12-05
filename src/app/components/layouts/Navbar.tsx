import React from "react";
import { utilities } from "../../utilities";
import { NavLinks } from "../../data";
// import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import ToggleTheme from "./ToggleTheme";

const { Component } = utilities;

const Navbar: React.FC = () => {
  const Links: JSX.Element = (
    <ul className="hidden items-center lg:flex">
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

  return (
    <Component className="border-b border-slate-200 bg-base-light/90 dark:border-slate-600 dark:bg-base-dark/90">
      <nav className="flex h-full min-h-[5rem] items-center justify-between">
        {/* logo */}
        <div className="">Logo</div>
        <div className="flex items-center justify-center gap-4 divide-x-2 divide-slate-300 dark:divide-slate-500">
          {/* links */}
          {Links}
          {/* theme */}
          <div className="flex items-center px-4">{<ToggleTheme />}</div>
          {/* additional links */}
          <div className=""></div>
        </div>
      </nav>
    </Component>
  );
};

export default Navbar;
