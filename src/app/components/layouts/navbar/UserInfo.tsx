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
        <UserCircleIcon className="h-20 w-20 text-cyan-500 dark:text-yellow-400" />
      </div>
      {/* Greet */}
      <h1 className="font-lexend text-2xl font-bold leading-7 tracking-tight text-slate-700 dark:text-white">
        Sign up or log in to your Library account.
      </h1>
      <p className="font-medium leading-6 text-slate-500 dark:text-slate-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur.
      </p>
      {/* Actions */}
      <div className="flex items-center justify-evenly">
        <RoundedButtons
          text="Sign Up"
          className="bg-cyan-500 text-white dark:bg-yellow-400 dark:text-slate-800"
        />
        <RoundedButtons
          text="Log In"
          className="border-2 border-cyan-500 text-cyan-500 dark:border-yellow-400 dark:text-yellow-400"
        />
      </div>
    </div>
  );
};

export default UserInfo;
