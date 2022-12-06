import { LayoutState } from "../features/LayoutSlice";

export const openSearchBar = (state: LayoutState) => {
  state.isSearchBarOpen = true;
};
export const closeSearchBar = (state: LayoutState) => {
  state.isSearchBarOpen = false;
};
