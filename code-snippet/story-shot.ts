storiesOf('CommentBox', module)
  .add('Default', () => (
    <CommentBox
      messages={messages}
      postMessage={postMessage}
      shouldShowMessages
      canSendMessages
    />
  ))
  .add('Not showing messages', () => (
    <CommentBox
      messages={messages}
      postMessage={postMessage}
      shouldShowMessages={false}
      canSendMessages
    />
  ))
  .add('Can not send a message', () => (
    <CommentBox
      messages={messages}
      postMessage={postMessage}
      shouldShowMessages
      canSendMessages={false}
    />
  ));