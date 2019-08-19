// User scenario: As a buyer, I'd like to ask a question about the product I want to buy.
export function* postMessage(api: APIClient, action: ReduxAction<{ message: string }>) {
  // 1. I'll type in the message in the comment box.
  const { message } = action.payload;

  // 2. I'll see a dialog box confirming if I really want to send this message.
  const confirmParams: ConfirmParams = {
    message: 'Do you want to send this message?',
    confirmText: 'Yeh',
    dismissText: 'Nah',
  };
  // Create side-effect to external world (mobile native bridge)
  if (!(yield call(nativeConfirm, confirmParams))) {
    return;
  }

  let error;
  try {
    const item = yield select(productSelector);
    // 3. After clicking confirmed button, I expect my message will be sent and store somewhere.
    yield call([api, api.postTransactionMessage], item.id, message);
  } catch (e) {
    error = e;
  }

  if (error) {
    // 4. If something goes wrong, I expect to see some error messages.
    yield call(nativeAlert, error.message);
    return;
  }

  // 5. If everything goes well, I expect to see all sent messages on the page.
  yield call(fetchTransactionMessages, api, item.id);
}