import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import axios from 'axios';
import {
  LOG_IN_REQUEST, LOG_IN_SUCCESS, LOG_IN_FAILURE,
  LOG_OUT_REQUEST, LOG_OUT_SUCCESS, LOG_OUT_FAILURE,
  SIGN_UP_REQUEST, SIGN_UP_SUCCESS, SIGN_UP_FAILURE,
  FOLLOW_REQUEST, FOLLOW_SUCCESS, FOLLOW_FAILURE,
  UN_FOLLOW_REQUEST, UN_FOLLOW_SUCCESS, UN_FOLLOW_FAILURE,
} from '../reducers/user';

function followAPI(data) {
  return axios.post('/api/login', data);
}

function* follow(action) {
  try {
    // const result = yield call(followAPI, action.data);
    yield delay(1000);
    yield put({
      type: FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: FOLLOW_FAILURE,
      error: err.resonse.data,
    });
  }
}

function unfollowAPI(data) {
  return axios.post('/api/login', data);
}

function* unfollow(action) {
  try {
    // const result = yield call(unfollowAPI, action.data);
    yield delay(1000);
    yield put({
      type: UN_FOLLOW_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: UN_FOLLOW_FAILURE,
      error: err.resonse.data,
    });
  }
}

function logInAPI(data) {
  return axios.post('/api/login', data);
}

function* logIn(action) {
  try {
    // const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.resonse.data,
    });
  }
}

function logOutAPI() {
  return axios.get('/api/logout');
}

function* logOut(action) {
  try {
    // const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.resonse.data,
    });
  }
}

function signUpAPI() {
  return axios.post('/api/signup');
}

function* signUp(action) {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.resonse.data,
    });
  }
}

function* watchFollow() {
  yield takeLatest(FOLLOW_REQUEST, follow);
}

function* watchUnfollow() {
  yield takeLatest(UN_FOLLOW_REQUEST, unfollow);
}

function* watchLogIn() {
  // takeEvery 는 비동기, while&take 는 동기
  // takeLatest 는 동시에 들어오는 요청중 마지막 요청만 허용
  yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignup() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
  yield all([
    fork(watchFollow),
    fork(watchUnfollow),
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignup),
  ]);
}
