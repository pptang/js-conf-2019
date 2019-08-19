// Smart Containers
const CommentBox = ({
  shouldDisableSentButton,
  messages,
  // ...some more props
}) => {
  if (someBranchingLogic) {
    return <CommentBoxTypeOne />;
  }
  return <CommentBoxTypeTwo />;
}

const mapStateToProps = ({ transactionData }: Store) => ({
  // ...some display logic,
  shouldDisableSentButton: true,
  // ...some data calculation for display
  messages: someCalculation(transactionData.messages),
  // ...more state from the store
});

const mapDispatchToProps = () => ({
  // ...dispatch actions
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommentBox);