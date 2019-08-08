import { all } from 'redux-saga/effects';
import loaderSagas from './loader';

export default function* rootSaga() {
  yield all([...loaderSagas]);
}
