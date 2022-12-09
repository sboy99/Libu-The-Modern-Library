import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { Actions } from "../../../store/features";
import { useLayout } from "../../../store";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Searchbutton: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const { isSearchBarOpen: isOpen } = useLayout();

  const handleClose = (): void => {
    dispatch(Actions.closeSearchBar());
  };
  const handleOpenSearchbar = () => {
    dispatch(Actions.openSearchBar());
  };

  return (
    <button
      onClick={isOpen ? handleClose : handleOpenSearchbar}
      className={`mx-2 rounded-full p-1 text-skin-base sm:mx-4 ${
        isOpen && `border border-skin-accent`
      }`}
    >
      {isOpen ? (
        <XMarkIcon className="pointer-events-none h-5 w-5 sm:h-6 sm:w-6" />
      ) : (
        <MagnifyingGlassIcon className="pointer-events-none h-6 w-6 sm:h-7 sm:w-7" />
      )}
    </button>
  );
};

export default Searchbutton;
