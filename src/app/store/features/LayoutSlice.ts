import { createSlice } from '@reduxjs/toolkit';
import type { ILayoutState } from '../interfaces/StoreInterface';
import {
  closeMenu,
  closeSearchBar,
  closeSignForm,
  openMenu,
  openSearchBar,
  openSignForm,
  setSignatureOption,
  startFallingBack,
  stopFallingBack,
  toggleMenu,
} from '../reducers/LayoutReducer';

const initialState: ILayoutState = {
  isFallingBack: false,
  isSearchBarOpen: false,
  isMenuOpen: false,
  isSignatureFormOpen: false,
  signatureOption: 'login',
};

const LayoutSlice = createSlice({
  name: `layout`,
  initialState,
  reducers: {
    startFallingBack,
    stopFallingBack,
    openSearchBar,
    closeSearchBar,
    openMenu,
    closeMenu,
    toggleMenu,
    openSignForm,
    closeSignForm,
    setSignatureOption,
  },
});

export default LayoutSlice;
