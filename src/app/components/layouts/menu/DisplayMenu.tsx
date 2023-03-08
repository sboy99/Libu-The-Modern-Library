import { Dialog, Transition } from '@headlessui/react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Menu } from '../..';
import { useLayout, useTheme } from '../../../store';
import { Actions } from '../../../store/features';
import Sidebar from '../../libraryControlPage/layout/Sidebar';

const DisplayMenu: React.FC = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const { isMenuOpen } = useLayout();
  const dispatch = useDispatch();
  const isAdminPage = pathname.startsWith('/control-panel');

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
            {isAdminPage ? <Sidebar /> : <Menu />}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default DisplayMenu;
