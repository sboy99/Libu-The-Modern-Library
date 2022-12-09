import React from "react";
import { utilities } from "../utilities";

const { Component, TypoGrapher } = utilities;

const HomePage: React.FC = () => {
  return (
    <Component className="min-h-screen">
      <TypoGrapher className="" proseSize="prose-lg">
        <h4 className="text-skin-accent">Hello Sagar</h4>
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </TypoGrapher>
    </Component>
  );
};

export default HomePage;
