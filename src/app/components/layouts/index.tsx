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
        <div className="grid pt-4 lg:grid-cols-16 lg:gap-4">
          {windowWidth >= 1024 && (
            <aside className="sticky top-4 h-fit flex-shrink lg:col-span-3 ">
              <Menu />
            </aside>
          )}
          <article className="lg:col-span-full lg:col-start-4 ">
            <Outlet />
          </article>
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Layout;
