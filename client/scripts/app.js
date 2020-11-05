var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      for (var i = 0; i < data.results.length; i++) {
        if (!data.results[i].username) {
          data.results[i].username = 'anonymous';
        }

        if (!data.results[i].text) {
          data.results[i].text = '';
        }

        if (!data.results[i].roomname) {
          data.results[i].roomname = 'All';
        }

        Messages[i] = data.results[i];
        Rooms.roomsList.add(data.results[i].roomname);
      }
      
      callback();
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();
  }
};
