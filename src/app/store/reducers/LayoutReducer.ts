import type { PayloadAction } from '@reduxjs/toolkit';
import type {
  ILayoutState,
  TSignatureOptionType,
} from '../interfaces/StoreInterface';

export const startFallingBack = (state: ILayoutState) => {
  state.isFallingBack = true;
};
export const stopFallingBack = (state: ILayoutState) => {
  state.isFallingBack = false;
};

export const openSearchBar = (state: ILayoutState) => {
  state.isSearchBarOpen = true;
};
export const closeSearchBar = (state: ILayoutState) => {
  state.isSearchBarOpen = false;
};

export const openMenu = (state: ILayoutState) => {
  state.isMenuOpen = true;
};
export const closeMenu = (state: ILayoutState) => {
  state.isMenuOpen = false;
};
export const toggleMenu = (state: ILayoutState) => {
  state.isMenuOpen = !state.isMenuOpen;
};

export const openSignForm = (state: ILayoutState) => {
  state.isSignatureFormOpen = true;
};
export const closeSignForm = (state: ILayoutState) => {
  state.isSignatureFormOpen = false;
};

export const setSignatureOption = (
  state: ILayoutState,
  action: PayloadAction<TSignatureOptionType>
) => {
  state.signatureOption = action.payload;
};
