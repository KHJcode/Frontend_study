import { takeLatest, all, fork, put, delay } from 'redux-saga/effects';
import axios from 'axios';

import {
  ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
  ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../reducers/post';

function addPostAPI(data) {
  return axios.post(`/api/post/${data.postId}`, data);
}

function* addPost(action) {
  const result = yield delay(1000);
  //const result = yield call(addPostAPI, action.data);
  try {
    yield put({
      type: ADD_POST_SUCCESS,
      data: result.data
    });
  } catch (err) {
    yield put({
      type: ADD_POST_FAILURE,
      error: err.resonse.data
    });
  }
}

function addCommentAPI(data) {
  return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
  const result = yield delay(1000);
  //const result = yield call(addPostAPI, action.data);
  try {
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: result.data
    });
  } catch (err) {
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.resonse.data
    });
  }
}

function* watchAddPost() {
  yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
  yield all([
    fork(watchAddPost),
    fork(watchAddComment),
  ]);
}