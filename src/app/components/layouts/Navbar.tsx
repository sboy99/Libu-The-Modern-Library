import React from "react";
import { utilities } from "../../utilities";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./navbar/ToggleTheme";
import { StarIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { HashLink } from "react-router-hash-link";
import UserInfo from "./navbar/UserInfo";
import Searchbar from "./navbar/Searchbar";
import Logo from "./navbar/Logo";

const { Component, Pop } = utilities;

const Navbar: React.FC = () => {
  const { pathname } = useLocation();

  const menu: JSX.Element = (
    <button className="ml-2 rounded-full p-1 text-slate-700 outline-none transition-all duration-300 ease-in-out hover:bg-slate-200/50 dark:text-slate-200 dark:hover:bg-slate-600 lg:hidden">
      <Bars3Icon className="h-7 w-7 sm:h-8 sm:w-8" />
    </button>
  );

  return (
    <Component className="border-b border-slate-200 bg-slate-50 px-2 dark:border-slate-600 dark:bg-base-dark/90 sm:px-0">
      <nav className="flex h-full min-h-16 items-center justify-between sm:min-h-[5rem]">
        {/* logo on large screen */}
        <HashLink
          to={`${pathname}#top`}
          smooth
          className="hidden rounded-full px-4 py-1 transition-all duration-300 ease-in-out hover:bg-slate-200 dark:hover:bg-slate-600 lg:block"
        >
          <Logo />
        </HashLink>
        {/* Menu btutton for medium screen */}
        {menu}
        <div className="flex w-full items-center justify-center divide-x-2 divide-slate-300 dark:divide-slate-500">
          <div className="flex w-full items-center justify-end px-2 sm:px-4">
            {/* search bar */}
            <div className="hidden w-full md:block">
              <Searchbar />
            </div>
            {/* star us btn */}
            <a
              href="https://github.com/sboy99/Libu-The-Modern-Library"
              target={`_blank`}
              rel="noopener noreferrer"
              className="rounded-full bg-cyan-500 p-1 text-white dark:bg-yellow-400 dark:text-slate-700 sm:flex sm:items-center sm:gap-1 sm:whitespace-nowrap sm:px-4 sm:py-2 sm:font-medium"
            >
              <StarIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <p className="hidden sm:block">Star Us</p>
            </a>
          </div>
          {/* separator */}
          <div className="flex items-center gap-2 px-2 sm:gap-4 sm:px-4">
            {/* theme */}
            {<ToggleTheme />}
            {/* additional links */}
            <Pop
              Icon={UserCircleIcon}
              iconClass="w-8 h-8 sm:w-9 sm:h-9 text-slate-600 dark:text-slate-200"
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
