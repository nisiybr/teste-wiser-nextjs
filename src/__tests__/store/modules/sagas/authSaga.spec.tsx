import { runSaga } from 'redux-saga';
import MockAdapter from 'axios-mock-adapter';
import { waitFor } from '@testing-library/dom';
import api from '../../../../services/api';
import { ActionTypes } from '../../../../store/modules/auth/types';

import {
  signInSuccess,
  signInFailure,
} from '../../../../store/modules/auth/actions';
import { signIn, signOut } from '../../../../store/modules/auth/sagas';

const apiMock = new MockAdapter(api);
// mockando o saga
const dispatch = jest.fn();

describe('Auth saga', () => {
  beforeEach(() => {
    dispatch.mockClear();
  });
  it('should be able to realize login', async () => {
    // quando eu tiver uma chamada get na rota 'users', ele vai executar a função abaixo
    apiMock.onGet('users').reply(200, [
      {
        id: '11',
        name: 'Teste Fácil',
        email: 'teste@teste.com',
        password: '123456',
      },
    ]); // codigo do status da resposta e a resposta

    await runSaga({ dispatch }, signIn, {
      type: ActionTypes.signInRequest,
      payload: {
        email: 'teste@teste.com',
        password: '123456',
      },
    }).toPromise();

    await waitFor(() =>
      expect(dispatch).toHaveBeenCalledWith(
        signInSuccess('11', {
          id: '11',
          name: 'Teste Fácil',
          email: 'teste@teste.com',
          password: '123456',
        }),
      ),
    );
  });
  it('should be able to match email login', async () => {
    // quando eu tiver uma chamada get na rota 'users', ele vai executar a função abaixo
    apiMock.onGet('users').reply(200, [
      {
        id: '11',
        name: 'Teste Fácil',
        email: 'teste1@teste1.com',
        password: '123456',
      },
    ]); // codigo do status da resposta e a resposta

    await runSaga({ dispatch }, signIn, {
      type: ActionTypes.signInRequest,
      payload: {
        email: 'teste@teste.com',
        password: '123456',
      },
    }).toPromise();

    await waitFor(() => expect(dispatch).toHaveBeenCalledWith(signInFailure()));
  });
  it('should be able to match password login', async () => {
    // quando eu tiver uma chamada get na rota 'users', ele vai executar a função abaixo
    apiMock.onGet('users').reply(200, [
      {
        id: '11',
        name: 'Teste Fácil',
        email: 'teste@teste.com',
        password: '123456',
      },
    ]); // codigo do status da resposta e a resposta

    await runSaga({ dispatch }, signIn, {
      type: ActionTypes.signInRequest,
      payload: {
        email: 'teste@teste.com',
        password: '1234567',
      },
    }).toPromise();

    await waitFor(() => expect(dispatch).toHaveBeenCalledWith(signInFailure()));
  });
  it('should be able to sign out', async () => {
    await runSaga({ dispatch }, signOut).toPromise();
  });
});
