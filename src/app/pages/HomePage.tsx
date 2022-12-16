import React from "react";
import { Component, Container } from "../utilities";
import { Hero, Incentatives } from "../components";

const HomePage: React.FC = () => {
  return (
    <Component className="relative z-0 min-h-screen overflow-hidden p-0">
      <Container>
        <Hero />
        <Incentatives />
      </Container>
    </Component>
  );
};

export default HomePage;
