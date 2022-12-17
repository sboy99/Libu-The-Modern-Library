import { LayoutState, signatureOptionType } from "../features/LayoutSlice";
import { PayloadAction } from "@reduxjs/toolkit";

export const startFallingBack = (state: LayoutState) => {
  state.isFallingBack = true;
};
export const stopFallingBack = (state: LayoutState) => {
  state.isFallingBack = false;
};

export const openSearchBar = (state: LayoutState) => {
  state.isSearchBarOpen = true;
};
export const closeSearchBar = (state: LayoutState) => {
  state.isSearchBarOpen = false;
};

export const openMenu = (state: LayoutState) => {
  state.isMenuOpen = true;
};
export const closeMenu = (state: LayoutState) => {
  state.isMenuOpen = false;
};
export const toggleMenu = (state: LayoutState) => {
  state.isMenuOpen = !state.isMenuOpen;
};

export const openSignForm = (state: LayoutState) => {
  state.isSignatureFormOpen = true;
};
export const closeSignForm = (state: LayoutState) => {
  state.isSignatureFormOpen = false;
};

export const setSignatureOption = (
  state: LayoutState,
  action: PayloadAction<signatureOptionType>
) => {
  state.signatureOption = action.payload;
};
