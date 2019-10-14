function* postMessage(action) {
  try {
    const allMessages = yield call(Api.PostMessage, action.payload.message);
    yield put({ type: 'POST_MESSAGE_SUCCEEDED', allMessages });
  } catch (e) {
    yield put({ type: 'POST_MESSAGE_FAILED', message: e.message });
  }
}
