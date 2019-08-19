// User scenario: As a buyer, I'd like to ask a question about the product I want to buy.
describe('postMessage', () => {
  // Prepare for the mock
  const api = {
    postTransactionMessage: jest.fn(),
    getTransactionMessages: jest.fn(),
  };

  // I'll type in the message in the comment box.
  const action = {
    type: '',
    payload: {
      message: 'Little wonder, little wanderer',
    },
  };

  const itemId = '12345678';
  const gen = cloneableGenerator(postMessage)(api, action);

  // 2. I'll see a dialog box asking if I really want to send this message.
  it('should ask for confirmation', () => {
    const next = gen.next().value;
    expect(next).toHaveProperty('CALL');
    expect(next.CALL.fn).toBe(nativeConfirm);
    expect(next.CALL.args).toMatchSnapshot();
  });

  it('should not proceed if user declines', () => {
    expect(gen.clone().next(false).done).toBe(true);
  });

  // 3. After clicking confirmed button, I expect my message will be sent and store somewhere.
  it('should select the product', () => {
    expect(gen.next().value).toEqual(select(productSelector));
  });
  it('should make an API call to post the message', () => {
    expect(gen.next({ id: itemId }).value).toEqual(
      call([api, api.postTransactionMessage], itemId, action.payload.message),
    );
  });

  // 4. If something goes wrong, I expect to see some error messages.
  it('should propagate unexpected errors', () => {
    expect(() => gen.clone().throw(new Error('Ooops'))).toThrow();
  });

  // 5. If everything goes well, I expect to see all sent messages on the page.
  it('should fetch all messages and show on the page', () => {
    const response = {
      data: [{ body: action.payload.message }],
    };

    const action = {
      type: FETCH_TRANSACTION_MESSAGES_SUCCESS, payload: response.data
    };

    expect(gen.next(actions).value).toEqual(put(action));
  });
});