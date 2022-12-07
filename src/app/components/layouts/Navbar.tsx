import React from "react";
import { utilities } from "../../utilities";
import { useLocation } from "react-router-dom";
import ToggleTheme from "./navbar/ToggleTheme";
import { StarIcon, Bars3Icon } from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { HashLink } from "react-router-hash-link";
import UserInfo from "./navbar/UserInfo";
import Searchbar from "./navbar/Searchbar";
import Searchbutton from "./navbar/Searchbutton";
import Logo from "./navbar/Logo";
import { useTheme } from "../../store";

const { Component, Pop } = utilities;

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const { windowWidth: width } = useTheme();

  const SearchBar: React.FC = width < 768 ? Searchbutton : Searchbar;
  const Menu: JSX.Element = (
    <button className="ml-2 rounded-full p-1 text-light-text outline-none transition-all duration-300 ease-in-out hover:bg-light-bg-hover dark:text-dark-text dark:hover:bg-dark-bg-hover lg:hidden">
      <Bars3Icon className="h-7 w-7 sm:h-8 sm:w-8" />
    </button>
  );

  return (
    <Component className="border-b border-light-border bg-light-bg px-2 dark:border-dark-border dark:bg-dark-bg-deep sm:px-0">
      <nav className="flex h-full min-h-16 items-center justify-between sm:min-h-[5rem]">
        {/* logo on large screen */}
        <HashLink
          to={`${pathname}#top`}
          smooth
          className="hidden rounded-full px-4 py-1 transition-all duration-300 ease-in-out hover:bg-light-bg-hover dark:hover:bg-dark-bg-hover lg:block"
        >
          <Logo />
        </HashLink>
        {/* Menu btutton for medium screen */}
        {Menu}
        <div className="flex w-full items-center justify-center divide-x-2 divide-light-devide dark:divide-dark-devide">
          <div className="flex w-full items-center justify-end px-2 sm:px-4">
            {/* search bar  */}
            <SearchBar />
            {/* star us btn */}
            <a
              href="https://github.com/sboy99/Libu-The-Modern-Library"
              target={`_blank`}
              rel="noopener noreferrer"
              className="rounded-full bg-light-bg-accent p-1 text-dark-text dark:bg-dark-bg-accent dark:text-light-text sm:flex sm:items-center sm:gap-1 sm:whitespace-nowrap sm:px-4 sm:py-2 sm:font-medium"
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
              iconClass="w-8 h-8 sm:w-9 sm:h-9 text-light-text dark:text-dark-text"
              className="flex items-center justify-center "
            >
              <div className="min-w-[18rem] rounded-lg bg-light-bg p-4 dark:bg-dark-bg">
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
