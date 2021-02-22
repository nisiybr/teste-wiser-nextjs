import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import api from '../../../services/api';
import { signInSuccess, signInFailure, signInRequest } from './actions';
import { ActionTypes } from './types';

type CheckSignInRequest = ReturnType<typeof signInRequest>;

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export function* signIn({ payload }: CheckSignInRequest) {
  try {
    const { email, password } = payload;

    const response: AxiosResponse<IUser[]> = yield call(api.get, 'users');
    const users = response.data;

    const user = users.filter(item => item.email === email);

    if (user.length <= 0) {
      throw new Error();
    }
    if (user[0].password !== password) {
      throw new Error();
    }
    const token = user[0].id;

    yield put(signInSuccess(token, user[0]));
    toast.success('Login realizado com sucesso!');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signInFailure());
  }
}

export function* signOut() {
  yield toast.warn('Logout realizado com sucesso!');
}

export default all([
  takeLatest(ActionTypes.signInRequest, signIn),
  takeLatest(ActionTypes.signOut, signOut),
]);
