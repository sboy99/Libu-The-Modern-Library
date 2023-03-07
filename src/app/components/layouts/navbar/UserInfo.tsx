import { useUser } from '@/app/store';
import { logoutUser } from '@/app/store/api/authentication';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Actions } from '../../../store/features';
import { PopButton } from '../../utilities';

const UserInfo: React.FC = (): JSX.Element => {
  const { user } = useUser();
  const dispatch = useDispatch();

  const openLoginForm = () => {
    dispatch(Actions.setSignatureOption('login'));
    dispatch(Actions.openSignForm());
  };
  const openRegisterForm = () => {
    dispatch(Actions.setSignatureOption('register'));
    dispatch(Actions.openSignForm());
  };
  const handleLogout = () => {
    dispatch(logoutUser() as any);
  };

  if (user && user?.userId)
    return (
      <div className="mt-4 flex flex-col gap-y-4 px-2">
        {/* user profile */}
        <div className="flex gap-2">
          {/* avatar */}
          <div className="flex items-center justify-start">
            <UserCircleIcon className="h-16 w-16 text-skin-muted" />
          </div>
          {/* username */}
          <div className="-space-y-1">
            <h2 className="text-2xl font-bold capitalize text-skin-base">
              {user.userName}
            </h2>
            <span className="rounded-md bg-skin-muted px-2 py-1 text-xs font-semibold text-skin-base">
              {user.role}
            </span>
          </div>
        </div>
        {/* logout */}
        <PopButton
          onClick={handleLogout}
          className="bg-btn-accent text-skin-inverted"
        >
          Log Out
        </PopButton>
      </div>
    );

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
        <PopButton
          onClick={openRegisterForm}
          className="bg-btn-accent text-skin-inverted"
        >
          Sign Up
        </PopButton>
        <PopButton
          onClick={openLoginForm}
          className="border-2 border-skin-accent text-skin-accent"
        >
          Log In
        </PopButton>
      </div>
    </div>
  );
};

export default UserInfo;
