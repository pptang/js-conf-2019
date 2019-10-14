export function* postMessage(api: APIClient, action: ReduxAction<{ message: string }>) {
  const { message } = action.payload;

  const confirmParams: ConfirmParams = {
    message: 'Do you want to send this message?',
    confirmText: 'Yeh',
    dismissText: 'Nah',
  };
  if (!(yield call(nativeConfirm, confirmParams))) {
    return;
  }

  let error;
  try {
    const item = yield select(productSelector);
    yield call([api, api.postTransactionMessage], item.id, message);
  } catch (e) {
    error = e;
  }

  if (error) {
    yield call(nativeAlert, error.message);
    return;
  }

  yield call(fetchTransactionMessages, api, item.id);
}