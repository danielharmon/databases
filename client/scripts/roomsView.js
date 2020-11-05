var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    this.$select.empty();
    Rooms.roomsList.forEach(function(roomname) {

      RoomsView.renderRoom(roomname);
    });

  },


  renderRoom: function(roomname) {
    let $option = $('<option></option>');
    $option.text(roomname);
    this.$select.append($option);
  }

};

