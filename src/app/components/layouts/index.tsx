import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SearchBox from "./navbar/SearchBox";

const Layout: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <div className="">
        <Navbar />
        <SearchBox />
      </div>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
