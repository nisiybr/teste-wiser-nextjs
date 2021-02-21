import { AxiosResponse } from 'axios';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '../../../services/api';
import { signInSuccess, signInFailure, signInRequest } from './actions';

type CheckSignInRequest = ReturnType<typeof signInRequest>;

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

function* signIn({ payload }: CheckSignInRequest) {
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
  } catch (err) {
    console.log('Falha na autenticação, verifique seus dados!');
    // toast.error('Falha na autenticação, verifique seus dados!');
    yield put(signInFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
