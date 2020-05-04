function ChatUI() {
  this.addMessage = function(messageText, messageSenderType) {
    var chat = document.getElementById('chat-wrap');
    var text = messageText;

    if (text !== '') {
      var newMessageContainer = document.createElement('div');
      var newMessageAuthor = document.createElement('h2');
      var newMessageText = document.createElement('p');

      newMessageAuthor.classList.add('chat-wrap-element_title');
      newMessageText.innerText = text;

      if (messageSenderType === 'client') {
        newMessageAuthor.innerText = 'You';
        newMessageText.classList.add('chat-wrap-element_text');
        newMessageContainer.classList.add('chat-wrap-element_in');
        newMessageContainer.classList.remove('chat-wrap-element_out');
      } else {
        newMessageAuthor.innerText = 'interlocutor';
        newMessageText.classList.remove('message_text--myself');
        newMessageContainer.classList.add('chat-wrap-element_out');
        newMessageContainer.classList.remove('chat-wrap-element_in');
      }

      newMessageContainer.append(newMessageAuthor, newMessageText);
      chat.append(newMessageContainer);
    }else{
		alert('Введите текст сообщения!');
	}
  };
}
window.onload = function() {
  chat = new ChatUI();
  var sendButton = document.getElementById('chat-send-wrap_btn');
  sendButton.onclick = function() {
    var text = document.getElementById('chat-send-wrap_textarea').value;
    chat.addMessage(text, 'client');
    document.getElementById('chat-send-wrap_textarea').value = '';
  };
};
