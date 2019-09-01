<button
  class="button"
  data-bind="click: postMessage, css: {'button': canSendMessage() != true, 'button-primary': canPostMessage}">
  Send
</button>
