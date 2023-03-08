export type TSignatureOptionType = 'login' | 'register';
export type TUserRole = 'reader' | 'librarian' | 'owner';
type TApiResponseType = 'error' | 'warning' | 'success';
type TAuthState =
  | 'DEAUTHENTIC'
  | 'VERIFIED_AUTHENTIC'
  | 'NOT_VERIFIED'
  | 'SIGN_IN'
  | 'LOG_OUT';

export interface IApiResponse<T = unknown> {
  type: TApiResponseType;
  message: string;
  data?: T | T[];
}

export interface IApiState {
  isLoading: boolean;
  isFormLoading: boolean;
  response: {
    type: TApiResponseType | null;
    message: string | null;
  };
  errors?: Record<string, string>;
}

export interface ILayoutState {
  isFallingBack: boolean;
  isSearchBarOpen: boolean;
  isMenuOpen: boolean;
  isSignatureFormOpen: boolean;
  signatureOption: TSignatureOptionType;
}

export interface IThemeState {
  windowWidth: number;
  theme: string;
  title: string;
  isSyncWithSystem: boolean;
}

export interface IUser {
  authState: TAuthState;
  user: {
    userId: string;
    userName: string;
    role: TUserRole;
  } | null;
  profile: {
    name: string;
    bio: string;
    photo: string;
    isVerified: boolean;
  } | null;
}
