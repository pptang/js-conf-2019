describe('postMessage', () => {
  const api = {
    postTransactionMessage: jest.fn(),
    getTransactionMessages: jest.fn(),
  };

  const action = {
    type: '',
    payload: {
      message: 'Little wonder, little wanderer',
    },
  };

  const itemId = '12345678';
  const gen = cloneableGenerator(postMessage)(api, action);

  it('should ask for confirmation', () => {
    const next = gen.next().value;
    expect(next).toHaveProperty('CALL');
    expect(next.CALL.fn).toBe(nativeConfirm);
    expect(next.CALL.args).toMatchSnapshot();
  });

});