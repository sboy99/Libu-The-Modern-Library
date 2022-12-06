import ApiSlice from "./ApiSlice";
import ThemeSlice from "./ThemeSlice";

// Reducers
const ApiReducer = ApiSlice.reducer;
const ThemeReducer = ThemeSlice.reducer;
export const Reducers = { ApiReducer, ThemeReducer };
// Actions
export const Actions = { ...ApiSlice.actions, ...ThemeSlice.actions };
