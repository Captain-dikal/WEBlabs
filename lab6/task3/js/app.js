function ChatUI(user, message) {
  this.user = user;
  this.message = message;

  this.addMessage = function() {
    let newMessage = document.createElement('div');
    if (user == 'you') {
      newMessage.className = 'message-box message-box_you';
      newMessage.innerHTML = '<h1 class="message-box__user">Вы</h1>\n' +
        '          <p class="message-box__message">' + message + '</p>';
    } else {
      newMessage.className = 'message-box message-box_other';
      newMessage.innerHTML = '<h1 class="message-box__user">Собеседник</h1>\n' +
        '          <p class="message-box__message">' + message + '</p>';
    }
    document.querySelector('.js-chat-messages').append(newMessage);
  };
}

document.querySelector('.js-form').addEventListener('submit', function (event) {
  event.preventDefault();
  let user = document.querySelector('.js-select'),
    message = document.querySelector('.js-message'),
    newMessage;
  if(message.value.length > 0) {
    newMessage = new ChatUI(user.value, message.value);
    newMessage.addMessage();
    message.value = '';
  }
})

