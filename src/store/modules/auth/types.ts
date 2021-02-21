// eslint-disable-next-line no-shadow
export enum ActionTypes {
  signInRequest = '@auth/SIGN_IN_REQUEST',
  signInSuccess = '@auth/SIGN_IN_SUCCESS',
  signInFailure = '@auth/SIGN_IN_FAILURE',
  signOut = '@auth/SIGN_OUT',
}

export interface ISignInCredentials {
  email: string;
  password: string;
}

export interface IAuth {
  token: string;
  signed: boolean;
  loading: boolean;
}
