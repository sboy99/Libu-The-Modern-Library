import ApiSlice from "./ApiSlice";
import ThemeSlice from "./ThemeSlice";
import LayoutSlice from "./LayoutSlice";

// Reducers
const ApiReducer = ApiSlice.reducer;
const ThemeReducer = ThemeSlice.reducer;
const LayoutReducer = LayoutSlice.reducer;
export const Reducers = { ApiReducer, ThemeReducer, LayoutReducer };
// Actions
export const Actions = {
  ...ApiSlice.actions,
  ...ThemeSlice.actions,
  ...LayoutSlice.actions,
};
