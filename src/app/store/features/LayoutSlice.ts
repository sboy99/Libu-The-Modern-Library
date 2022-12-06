import { createSlice } from "@reduxjs/toolkit";
import { openSearchBar, closeSearchBar } from "../reducers/LayoutReducer";

export type LayoutState = {
  isSearchBarOpen: boolean;
};
const initialState: LayoutState = {
  isSearchBarOpen: false,
};

const LayoutSlice = createSlice({
  name: `layout`,
  initialState,
  reducers: {
    openSearchBar,
    closeSearchBar,
  },
});

export default LayoutSlice;
