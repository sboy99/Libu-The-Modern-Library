import { LayoutState } from "../features/LayoutSlice";

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
