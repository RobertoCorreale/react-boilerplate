import { takeLatest, put } from 'redux-saga/effects';

import {
  SHOW_LOADER_START,
  SHOW_LOADER_ERROR,
  SHOW_LOADER_SUCCESS,
  HIDE_LOADER_ERROR,
  HIDE_LOADER_START,
  HIDE_LOADER_SUCCESS
} from '../actions/loader';

function* showLoader() {
  try {
    yield put({ type: SHOW_LOADER_SUCCESS });
  } catch (error) {
    yield put({ type: SHOW_LOADER_ERROR, error });
  }
}

function* hideLoader() {
  try {
    yield put({ type: HIDE_LOADER_SUCCESS });
  } catch (error) {
    yield put({ type: HIDE_LOADER_ERROR, error });
  }
}

function* showLoaderWatch() {
  yield takeLatest(SHOW_LOADER_START, showLoader);
}

function* hideLoaderWatch() {
  yield takeLatest(HIDE_LOADER_START, hideLoader);
}

export default [showLoaderWatch(), hideLoaderWatch()];
