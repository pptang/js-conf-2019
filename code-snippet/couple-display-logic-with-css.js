function canPostMessage() {

  var msg = $('.message-textarea').val();
  return msg.length > 0 && !/^\s*$/.test(msg);

}