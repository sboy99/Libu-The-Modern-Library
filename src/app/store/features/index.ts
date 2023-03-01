import ApiSlice from './ApiSlice';
import LayoutSlice from './LayoutSlice';
import ThemeSlice from './ThemeSlice';
import UserSlice from './UserSlice';

// Reducers
const ApiReducer = ApiSlice.reducer;
const ThemeReducer = ThemeSlice.reducer;
const LayoutReducer = LayoutSlice.reducer;
const UserReducer = UserSlice.reducer;

export const Reducers = {
  ApiReducer,
  ThemeReducer,
  LayoutReducer,
  UserReducer,
};
// Actions
export const Actions = {
  ...ApiSlice.actions,
  ...ThemeSlice.actions,
  ...LayoutSlice.actions,
  ...UserSlice.actions,
};
