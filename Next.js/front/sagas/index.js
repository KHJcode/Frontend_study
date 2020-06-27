import { all, fork } from 'redux-saga/effects';

import postSaga from './post';
import userSaga from './user';

export default function* rootSaga() {
  yield all([
    // 비동기적인 호출을 할 때 사용
    // call 과 다르게 순서 상관없이 실행해야할 때 사용
    fork(postSaga),
    fork(userSaga),
  ]);
}
