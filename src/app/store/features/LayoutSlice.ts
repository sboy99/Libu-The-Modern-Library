import { createSlice } from "@reduxjs/toolkit";
import {
  startFallingBack,
  stopFallingBack,
  openSearchBar,
  closeSearchBar,
  openMenu,
  closeMenu,
  toggleMenu,
} from "../reducers/LayoutReducer";

export type LayoutState = {
  isFallingBack: boolean;
  isSearchBarOpen: boolean;
  isMenuOpen: boolean;
};
const initialState: LayoutState = {
  isFallingBack: false,
  isSearchBarOpen: false,
  isMenuOpen: false,
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
  },
});

export default LayoutSlice;
