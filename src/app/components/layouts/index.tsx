import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "../../utilities";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBox from "./navbar/SearchBox";
import Menu from "./Menu";
import DisplayMenu from "./menu/DisplayMenu";
import { useTheme } from "../../store";

const Layout: React.FC = (): JSX.Element => {
  const { windowWidth } = useTheme();
  return (
    <div className="flex flex-col">
      <div className="z-10">
        <Navbar />
        <SearchBox />
      </div>
      {/* Menu and outlet together */}
      <Container>
        <div className="grid py-4 lg:grid-cols-16 lg:gap-4">
          {windowWidth >= 1024 && (
            <aside className="sticky top-4 h-fit flex-shrink lg:col-span-3 ">
              <Menu />
            </aside>
          )}
          <article className="lg:col-span-full lg:col-start-4 ">
            <div className="">
              <Outlet />
              <Footer />
            </div>
          </article>
        </div>
      </Container>
      {/* Menu for medium devices */}
      <DisplayMenu />
    </div>
  );
};

export default Layout;
