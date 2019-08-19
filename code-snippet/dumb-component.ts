// Dumb Component
const CommentBoxTypeOne = ({
  messages,
  handleMessageChange,
  handleSubmit,
}) => (
  <>
    <Spacer3 />
    <div class="block">
      <textarea
        value={messages}
        onChange={handleMessageChange}
      />
      <PrimaryButton onClick={handleSubmit} />
    </div>
  </>
);