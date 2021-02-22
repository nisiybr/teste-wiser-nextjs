import { waitFor } from '@testing-library/dom';
import reducer, { INITIAL_STATE } from '../../../../store/modules/auth/reducer';
import * as Auths from '../../../../store/modules/auth/actions';

describe('Auth reducer', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });

  it('@auth/SIGN_IN_REQUEST', () => {
    const state = reducer(
      INITIAL_STATE,
      Auths.signInRequest({ email: 'teste@teste.com', password: '123456' }),
    );

    expect(state).toStrictEqual({
      loading: true,
      signed: false,
      token: null,
    });
  });
  it('@auth/SIGN_IN_SUCCESS', async () => {
    const state = reducer(
      INITIAL_STATE,
      Auths.signInSuccess(1, {
        id: 1,
        name: 'Teste',
        email: 'teste@teste.com.br',
        password: '123456',
      }),
    );
    await waitFor(() =>
      expect(state).toStrictEqual({
        loading: false,
        signed: true,
        token: 1,
      }),
    );
  });
  it('@auth/SIGN_IN_FAILURE', () => {
    const state = reducer(INITIAL_STATE, Auths.signInFailure());

    expect(state).toStrictEqual({
      loading: false,
      signed: false,
      token: null,
    });
  });
  it('@auth/SIGN_OUT', async () => {
    let state = reducer(
      INITIAL_STATE,
      Auths.signInSuccess(1, {
        id: 1,
        name: 'Teste',
        email: 'teste@teste.com.br',
        password: '123456',
      }),
    );

    await waitFor(() =>
      expect(state).toStrictEqual({
        loading: false,
        signed: true,
        token: 1,
      }),
    );

    state = reducer(INITIAL_STATE, Auths.signOut());

    await waitFor(() =>
      expect(state).toStrictEqual({
        loading: false,
        signed: false,
        token: null,
      }),
    );
  });
});
