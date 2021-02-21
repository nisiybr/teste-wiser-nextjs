// eh o arquivo que se faz a importacao na tela, para chamar uma action para alterar o state
// pode ser chamado por outros reducers tambem, ou saga.

import { ActionTypes, ISignInCredentials } from './types';

export function signInRequest({ email, password }: ISignInCredentials) {
  return {
    type: ActionTypes.signInRequest,
    payload: { email, password }, // o que nao eh o type, vem dentro de payload
  };
}
export function signInSuccess(token, user) {
  return {
    type: ActionTypes.signInSuccess,
    payload: { token, user },
  };
}
// sera utilizada para a falha do SignIn
export function signInFailure() {
  return {
    type: ActionTypes.signInFailure,
  };
}
export function signOut() {
  return {
    type: ActionTypes.signOut,
  };
}
