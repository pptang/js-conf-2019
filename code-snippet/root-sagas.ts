import { call, fork, take } from 'redux-saga/effects';

fork(function*() {
  while(true) {
    const action = yield take(POST_CHAT_MESSAGE);
    yield call(postMessageSaga, apiClient, action);
  }
});
