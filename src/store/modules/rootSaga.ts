import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
// asterisco é um generator, que é o equivalente a assíncrono
// e o yield seria o equivalente a um await
export default function* rootSaga() {
  return yield all([auth]);
}
