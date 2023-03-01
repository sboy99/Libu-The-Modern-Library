import React from 'react';
import { Hero, Incentatives } from '../components';
import { Component, Container } from '../components/utilities';

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
