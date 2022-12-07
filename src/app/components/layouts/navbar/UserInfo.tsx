import React from "react";
import { utilities } from "../../../utilities";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const { RoundedButtons } = utilities;

const UserInfo: React.FC = (): JSX.Element => {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  if (userLoggedIn) return <div className="">UserLoggedIn</div>;

  return (
    <div className="flex flex-col gap-4">
      {/* user Avatar */}
      <div className="flex items-center justify-start">
        <UserCircleIcon className="h-20 w-20 text-light-text-accent dark:text-dark-text-accent" />
      </div>
      {/* Greet */}
      <h1 className="font-lexend text-2xl font-bold leading-7 tracking-tight text-light-text dark:text-dark-text">
        Sign up or log in to your Library account.
      </h1>
      <p className="font-medium leading-6 text-light-text-p dark:text-dark-text-p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur.
      </p>
      {/* Actions */}
      <div className="flex items-center justify-evenly">
        <RoundedButtons
          text="Sign Up"
          className="bg-light-bg-accent text-dark-text dark:bg-dark-bg-accent dark:text-light-text"
        />
        <RoundedButtons
          text="Log In"
          className="border-2 border-light-text-accent text-light-text-accent dark:border-dark-text-accent dark:text-dark-bg-accent"
        />
      </div>
    </div>
  );
};

export default UserInfo;
