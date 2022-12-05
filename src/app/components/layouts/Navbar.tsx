import React from "react";
import { utilities } from "../../utilities";
import { NavLinks } from "../../data";
import { NavLink, useLocation } from "react-router-dom";
import ToggleTheme from "./navbar/ToggleTheme";
import { BookOpenIcon, StarIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { HashLink } from "react-router-hash-link";
import UserInfo from "./navbar/UserInfo";
import Searchbar from "./navbar/Searchbar";

const { Component, Pop } = utilities;

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const Links: JSX.Element = (
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

  const Logo = (
    <div className="flex items-center gap-x-2 font-inter text-2xl font-bold text-slate-700 dark:text-slate-200">
      <BookOpenIcon className="h-8 w-8 text-cyan-500 dark:text-yellow-400" />{" "}
      <span>LIBU</span>
    </div>
  );

  return (
    <Component className="border-b border-slate-200 bg-slate-50 dark:border-slate-600 dark:bg-base-dark/90">
      <nav className="flex h-full min-h-[5rem] items-center justify-between">
        {/* logo */}
        <HashLink
          to={`${pathname}#top`}
          smooth
          className="rounded-full px-4 py-1 transition-all duration-300 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-600"
        >
          {Logo}
        </HashLink>
        <div className="flex w-full items-center justify-center divide-x-2 divide-slate-300 dark:divide-slate-500">
          {/* links */}
          <div className="flex w-full items-center px-4">
            <Searchbar />
            <a
              href="https://github.com/sboy99/Libu-The-Modern-Library"
              target={`_blank`}
              rel="noopener noreferrer"
              className="flex items-center gap-1 whitespace-nowrap rounded-full bg-cyan-500 px-4 py-2 font-medium text-white dark:bg-yellow-400 dark:text-slate-700"
            >
              <StarIcon className="h-6 w-6" /> Star Us
            </a>
          </div>
          {/* separator */}
          <div className="flex items-center gap-4 px-4">
            {/* theme */}
            {<ToggleTheme />}
            {/* additional links */}
            <Pop
              Icon={UserCircleIcon}
              iconClass="w-9 h-9 text-slate-600 dark:text-slate-200"
              className="flex items-center justify-center "
            >
              <div className="min-w-[18rem] rounded-lg bg-white p-4 dark:bg-slate-700">
                <UserInfo />
              </div>
            </Pop>
          </div>
        </div>
      </nav>
    </Component>
  );
};

export default Navbar;
