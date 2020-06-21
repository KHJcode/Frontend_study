import { all, fork, call, put, take } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI(data) {
  return axios.post('/api/login', data);
}

const l = logIn({ type: 'LOG_IN_REQUEST', data: { id: 'khj@code.com' }});
l.next();
l.next();

function* logIn(action) {
  const result = yield call(logInAPI, action.data);
  try {
    yield put({
      type: 'LOG_IN_SUCCESS',
      data: result.data
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

function* logOut() {
  const result = yield call(logOutAPI);
  try {
    yield put({
      type: 'LOG_OUT_SUCCESS',
      data: result.data
    });
  } catch (err) {
    yield put({
      type: 'LOG_OUT_FAILURE',
      data: err.resonse.data
    });
  }
}

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  const result = yield call(addPostAPI, action.data);
  try {
    yield put({
      type: 'ADD_POST_SUCCESS',
      data: result.data
    });
  } catch (err) {
    yield put({
      type: 'ADD_POST_FAILURE',
      data: err.resonse.data
    });
  }
}

function* watchLogin() {
  yield take('LOG_IN', logIn);
}

function* watchLogOut() {
  yield take('LOG_OUT', logOut);
}

function* watchAddPost() {
  yield take('ADD_POST', addPost);
}

export default function* rootSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogOut),
    fork(watchAddPost),
  ]);
}