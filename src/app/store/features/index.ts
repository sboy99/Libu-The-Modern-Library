import ApiSlice from "./ApiSlice";

// Reducers
const ApiReducer = ApiSlice.reducer;
export const Reducers = { ApiReducer };
// Actions
export const Actions = { ...ApiSlice.actions };
