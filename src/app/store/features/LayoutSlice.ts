import { createSlice } from "@reduxjs/toolkit";
import {
  openSearchBar,
  closeSearchBar,
  openMenu,
  closeMenu,
  toggleMenu,
} from "../reducers/LayoutReducer";

export type LayoutState = {
  isSearchBarOpen: boolean;
  isMenuOpen: boolean;
};
const initialState: LayoutState = {
  isSearchBarOpen: false,
  isMenuOpen: false,
};

const LayoutSlice = createSlice({
  name: `layout`,
  initialState,
  reducers: {
    openSearchBar,
    closeSearchBar,
    openMenu,
    closeMenu,
    toggleMenu,
  },
});

export default LayoutSlice;
