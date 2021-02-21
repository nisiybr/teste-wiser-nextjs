import { persistStore } from 'redux-persist';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import persistReducers from './persistReducers';

import rootReducer from './modules/rootReducer';

import { IAuth } from './modules/auth/types';
import rootSaga from './modules/rootSaga';

export interface IState {
  auth: IAuth;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

// passar persistReducers por volta do rootReducer
const store = createStore(
  persistReducers(rootReducer),
  composeWithDevTools(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

// para persistir o store, devera ser passada duas variaveis
export { store, persistor };
