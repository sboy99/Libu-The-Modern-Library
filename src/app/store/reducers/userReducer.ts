import type { IUser } from '../interfaces/StoreInterface';

export const resetUser = (state: IUser) => {
  state.user = null;
  state.profile = null;
};
