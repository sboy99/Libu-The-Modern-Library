import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout: React.FC = (): JSX.Element => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
