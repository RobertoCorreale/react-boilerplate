import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import rootReducer from './reducers';
// import HttpServiceManager from '../httpServiceManager';

const initialState = {};

export default () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleware = applyMiddleware(sagaMiddleware);

  const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(middleware)
  );

  sagaMiddleware.run(rootSaga);

  // HttpServiceManager.setReduxStore(store);

  return {
    store
  };
};
