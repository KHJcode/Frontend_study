import { all, fork, takeLatest, put, delay } from "redux-saga/effects";
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

/*
const l = logIn({ type: 'LOG_IN_REQUEST', data: { id: 'khj@code.com' }});
l.next();
l.next();
*/

function* logIn(action) {
  try {
    console.log('saga login');
    //const result = yield call(logInAPI, action.data);
    yield delay(1000);
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: action.data
    });
  } catch (err) {
    yield put({
      type: 'LOG_IN_FAILURE',
      data: err.resonse.data
    });
  }
}

function logOutAPI() {
  return axios.get('/api/logout');
}

function* logOut(action) {
  try {
    //const result = yield call(logOutAPI);
    yield delay(1000);
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: action.data
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.resonse.data
    });
  }
}

function* watchLogIn() {
  // takeEvery 는 비동기, while&take 는 동기
  // takeLatest 는 동시에 들어오는 요청중 마지막 요청만 허용
  yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
  yield takeLatest('LOG_OUT_REQUEST', logOut);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
  ])
}