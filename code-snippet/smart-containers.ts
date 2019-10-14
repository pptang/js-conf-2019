const CommentBox = ({
  shouldDisableSentButton,
  messages,
}) => {
  if (someBranchingLogic) {
    return <CommentBoxTypeOne />;
  }
  return <CommentBoxTypeTwo />;
}

const mapStateToProps = ({ transactionData }) => ({
  shouldDisableSentButton: transactionData.comment.isDisabled,
  messages: someCalculation(transactionData.messages),
});

const mapDispatchToProps = (dispatch) => ({
  postMessage: (message) => {
    dispatch({
      type: 'POST_MESSAGE_REQUESTED',
      payload: { message}
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentBox);