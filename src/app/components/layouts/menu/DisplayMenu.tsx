import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useLayout, useTheme } from "../../../store";
import { Menu } from "../..";
import { useDispatch } from "react-redux";
import { Actions } from "../../../store/features";

const DisplayMenu: React.FC = () => {
  const { theme } = useTheme();
  const { isMenuOpen } = useLayout();
  const dispatch = useDispatch();

  function closeMenu(): void {
    dispatch(Actions.closeMenu());
  }

  return (
    <Transition appear show={isMenuOpen} as={React.Fragment}>
      <Dialog onClose={closeMenu} className={`relative ${theme}`}>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay
            className={`fixed inset-0 z-0 bg-skin-muted/30  backdrop-blur-sm`}
          ></Dialog.Overlay>
        </Transition.Child>
        <Transition.Child
          as={React.Fragment}
          enter="ease-out transform duration-500"
          enterFrom="-translate-x-full opacity-50"
          enterTo="translate-x-0 opacity-100"
          leave="ease-in duration-300"
          leaveFrom="translate-x-0 opacity-100"
          leaveTo="-translate-x-full opacity-0"
        >
          <Dialog.Panel
            className={`fixed inset-0 mt-16 h-fit max-w-[16rem] sm:mt-20`}
          >
            <Menu />
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default DisplayMenu;
