import { takeLatest, all, fork, put, delay } from 'redux-saga/effects';
import axios from 'axios';

function addPostAPI(data) {
  return axios.post('/api/post', data);
}

function* addPost(action) {
  const result = yield delay(1000);
  //const result = yield call(addPostAPI, action.data);
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

function* watchAddPost() {
  yield takeLatest('ADD_POST', addPost);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
  ]);
}