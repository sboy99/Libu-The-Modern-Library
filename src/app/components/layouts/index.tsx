import React from "react";
import { Outlet } from "react-router-dom";
import { utilities } from "../../utilities";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBox from "./navbar/SearchBox";
import Menu from "./Menu";
import { useTheme } from "../../store";

const { Container } = utilities;

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
        <div className="flex items-start pt-4">
          {windowWidth >= 1024 && (
            <aside className="sticky top-4 h-fit px-4">
              <Menu />
            </aside>
          )}
          <article className="flex-auto flex-shrink-0">
            <Outlet />
          </article>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Layout;
