function postMessage() {

  //...some validation logic

  return Mercari.call('messages/post', params, { type: 'POST' })
    .then(function () {
      setTimeout(function () {
        window.location.reload();
      }, 1000);
    });
}