export const postChatMessage: ReduxActionCreator<{ message: string }> = payload => ({
  type: POST_CHAT_MESSAGE,
  payload,
});