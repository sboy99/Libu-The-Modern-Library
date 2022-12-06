import React from "react";
import { utilities } from "../../../utilities";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useLayout, useTheme } from "../../../store";
import Searchbar from "./Searchbar";
import { useDispatch } from "react-redux";
import { Actions } from "../../../store/features";

const { Component, RoundedButtons } = utilities;

type Props = {};

const SearchBox: React.FC = (): JSX.Element | null => {
  const { isSearchBarOpen: isOpen } = useLayout();
  const { windowWidth: width } = useTheme();
  const dispatch = useDispatch();

  const handleClose = (): void => {
    dispatch(Actions.closeSearchBar());
  };

  const CloseSearch: JSX.Element = (
    <button
      className="rounded-full bg-rose-600 p-1 text-white outline-none"
      onClick={handleClose}
    >
      <XMarkIcon className="pointer-events-none h-5 w-5 sm:h-6 sm:w-6" />
    </button>
  );

  return isOpen && width < 768 ? (
    <Component className="flex items-center justify-center border-b border-slate-200 bg-slate-50 px-2 dark:border-slate-600 dark:bg-slate-800">
      <div className="flex min-h-16 items-center justify-center gap-2 px-2">
        <Searchbar />
        {CloseSearch}
      </div>
    </Component>
  ) : null;
};

export default SearchBox;
