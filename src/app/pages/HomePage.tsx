import React from "react";
import { Component } from "../utilities";
import { Hero, Incentatives } from "../components";

const HomePage: React.FC = () => {
  return (
    <Component className="relative z-0 min-h-screen overflow-hidden p-0">
      <Hero />
      <Incentatives />
    </Component>
  );
};

export default HomePage;
