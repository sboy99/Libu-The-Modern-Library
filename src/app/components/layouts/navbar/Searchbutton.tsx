import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { Actions } from "../../../store/features";

const Searchbutton: React.FC = () => {
  const dispatch = useDispatch();

  const handleOpenSearchbar = () => {
    dispatch(Actions.openSearchBar());
  };

  return (
    <button
      onClick={handleOpenSearchbar}
      className="mx-2 rounded-full p-1 text-slate-700 hover:bg-slate-200/50 dark:text-slate-200 dark:hover:bg-slate-600 sm:mx-4"
    >
      <MagnifyingGlassIcon className="h-6 w-6 sm:h-7 sm:w-7" />
    </button>
  );
};

export default Searchbutton;
