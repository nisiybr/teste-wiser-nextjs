import { Reducer } from 'redux';
import produce from 'immer';
import { IAuth, ISignInCredentials } from './types';

const INITIAL_STATE: IAuth = {
  token: null,
  signed: false,
  loading: false,
};

const auth: Reducer<IAuth> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.token = action.payload.token;
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.token = null;
        draft.signed = false;
        break;
      }
      default: {
        return draft;
      }
    }
  });
};
export default auth;
