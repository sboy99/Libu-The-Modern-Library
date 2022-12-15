import React from "react";
import { Component } from "../utilities";
import { Hero } from "../components";

const HomePage: React.FC = () => {
  return (
    <Component className="relative z-0 min-h-screen overflow-hidden p-0">
      <Hero />
    </Component>
  );
};

export default HomePage;
