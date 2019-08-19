const mapDispatchToProps = (dispatch: Dispatch<void>): DispatchProps => ({
  postMessage: (message: string) => dispatch(postChatMessage({ message }),
});