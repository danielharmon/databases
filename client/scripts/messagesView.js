var MessagesView = {

  roomName: 'All',
  $chats: $('#chats'),

  initialize: function() {

    this.$chats.empty();
    $('#rooms button').on('click', function() {
      MessagesView.roomName = prompt('Type in your room name:' || 'All');
    });

    $('#rooms select').on('change', function() {

      MessagesView.initialize();
    });

    var $selectedRoom = $('#rooms select option:selected').text();

    if ($selectedRoom === 'All') {
      for (let key in Messages) {
        MessagesView.renderMessage(Messages[key]);
      }
    } else {
      for (let key in Messages) {
        if (Messages[key].roomname === $selectedRoom) {
          MessagesView.renderMessage(Messages[key]);
        }
      }
    }

    $('.username').on('click', function() {
      Friends.friendsList.add($(this).text());
      MessagesView.initialize();
    });
  },

  renderMessage: function(message) {

    if (Friends.friendsList.has(` ${message.username} `)) {
      this.$chats.append(MessageView.renderFriend(message));
    } else {
      this.$chats.append(MessageView.render(message));
    }
  }
};












