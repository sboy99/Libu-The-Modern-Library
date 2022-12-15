import React from "react";
import { RoundedButtons } from "../../../utilities";
import { UserCircleIcon } from "@heroicons/react/24/solid";

const UserInfo: React.FC = (): JSX.Element => {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  if (userLoggedIn) return <div className="">UserLoggedIn</div>;

  return (
    <div className="flex flex-col gap-4 py-2 px-1">
      {/* user Avatar */}
      <div className="flex items-center justify-start">
        <UserCircleIcon className="h-20 w-20 text-skin-accent" />
      </div>
      {/* Greet */}
      <h1 className="font-lexend text-2xl font-bold leading-7 tracking-tight text-skin-base">
        Sign up or log in to your Library account.
      </h1>
      <p className="font-medium leading-5 text-skin-muted ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
        dolor sit amet consectetur.
      </p>
      {/* Actions */}
      <div className="flex items-center justify-evenly">
        <RoundedButtons
          text="Sign Up"
          className="bg-btn-accent text-skin-inverted"
        />
        <RoundedButtons
          text="Log In"
          className="border-2 border-skin-accent text-skin-accent"
        />
      </div>
    </div>
  );
};

export default UserInfo;
