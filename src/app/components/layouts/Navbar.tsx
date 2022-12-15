import React from "react";
import { Container, Pop, Glow } from "../../utilities";
import { useLocation } from "react-router-dom";
import { StarIcon, Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserCircleIcon, PaintBrushIcon } from "@heroicons/react/24/solid";
import { HashLink } from "react-router-hash-link";
import { useLayout, useTheme } from "../../store";
import { useDispatch } from "react-redux";
import { Actions } from "../../store/features";
import UserInfo from "./navbar/UserInfo";
import Themes from "./navbar/Themes";
import Searchbar from "./navbar/Searchbar";
import Searchbutton from "./navbar/Searchbutton";
import Logo from "./navbar/Logo";

const Navbar: React.FC = () => {
  const { pathname } = useLocation();
  const { windowWidth: width } = useTheme();
  const { isMenuOpen } = useLayout();
  const dispatch = useDispatch();

  function handleMenu() {
    dispatch(Actions.toggleMenu());
  }

  const SearchBar: React.FC = width < 768 ? Searchbutton : Searchbar;
  const toggleIcon = isMenuOpen ? (
    <XMarkIcon className="h-7 w-7 sm:h-8 sm:w-8" />
  ) : (
    <Bars2Icon className="h-7 w-7 sm:h-8 sm:w-8" />
  );

  const Menu: JSX.Element = (
    <button
      onClick={handleMenu}
      className="ml-2 rounded-full p-1 text-skin-base outline-none transition-all duration-300 ease-in-out hover:bg-skin-muted lg:hidden"
    >
      {toggleIcon}
    </button>
  );

  return (
    <Container className="relative z-50 border-b border-skin-base bg-skin-base px-2 sm:px-0">
      <Glow id="NavabarGlow" className="right-8 max-w-md lg:max-w-xl" />
      <nav className="flex h-full min-h-16 items-center justify-between sm:min-h-[5rem]">
        {/* logo on large screen */}
        <HashLink
          to={`${pathname}#top`}
          smooth
          className="hidden rounded-full px-4 py-1 transition-all duration-300 ease-in-out hover:bg-skin-muted lg:block"
        >
          <Logo />
        </HashLink>
        {/* Menu btutton for medium screen */}
        {Menu}
        <div className="flex w-full items-center justify-center divide-x-2 divide-skin-base/50">
          <div className="flex w-full items-center justify-end px-2 sm:px-4">
            {/* search bar  */}
            <SearchBar />
            {/* star us btn */}
            <a
              href="https://github.com/sboy99/Libu-The-Modern-Library"
              target={`_blank`}
              rel="noopener noreferrer"
              className="rounded-full bg-btn-accent p-1 text-skin-inverted sm:flex sm:items-center sm:gap-1 sm:whitespace-nowrap sm:px-4 sm:py-2 sm:font-semibold sm:tracking-tight"
            >
              <StarIcon className="h-5 w-5 sm:h-6 sm:w-6" />{" "}
              <p className="hidden sm:block">Star Us</p>
            </a>
          </div>
          {/* separator */}
          <div className="flex items-center gap-2 px-2 sm:gap-4 sm:px-4">
            {/* Multi theme select */}
            {/* {<ToggleTheme />} */}
            <Pop
              Icon={PaintBrushIcon}
              popDesc="Theme"
              iconClass="w-8 h-8 sm:w-9 sm:h-9 p-1.5 text-skin-base group-hover:text-skin-inverted"
              className="flex items-center justify-center "
            >
              <div className="min-w-[18rem] p-4 ">
                <Themes />
              </div>
            </Pop>
            {/* additional links */}
            <Pop
              Icon={UserCircleIcon}
              popDesc="Profile"
              iconClass="w-8 h-8 sm:w-9 sm:h-9 text-skin-base group-hover:text-skin-inverted"
              className="flex items-center justify-center "
            >
              <div className="min-w-[18rem] p-4">
                <UserInfo />
              </div>
            </Pop>
          </div>
        </div>
      </nav>
    </Container>
  );
};

export default Navbar;
