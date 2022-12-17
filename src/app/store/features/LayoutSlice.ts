import { createSlice } from "@reduxjs/toolkit";
import {
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
} from "../reducers/LayoutReducer";

export type signatureOptionType = "login" | "register";

export type LayoutState = {
  isFallingBack: boolean;
  isSearchBarOpen: boolean;
  isMenuOpen: boolean;
  isSignatureFormOpen: boolean;
  signatureOption: signatureOptionType;
};
const initialState: LayoutState = {
  isFallingBack: false,
  isSearchBarOpen: false,
  isMenuOpen: false,
  isSignatureFormOpen: true,
  signatureOption: "login",
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
