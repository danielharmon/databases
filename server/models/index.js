var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      db.datab.query('SELECT * FROM messages', (err, result) => {
              if (err)  cb(err);
              else {
                cb(null, result);
              }
            });

    }, // a function which produces all the messages
    post: function (message, cb) {
      console.log(message)


     // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      // db.datab.connect(function(err) {
      //   if (err) cb(err);
      //   else {
      //     console.log('get user connected');
          db.datab.query('SELECT * FROM users', (err, result) => {
            if (err) cb(err);
            else {
              console.log('user result', result);
              cb(null, result);
            }
          });
       // }
      }

    },
    post: function (user, cb) {
      db.datab.connect(function(err) {
        if (err) cb(err);
        else {
          db.datab.query(`INSERT INTO users (username) VALUES ('${user.username}');`, (err, result) => {
            if (err) cb(err);
            else {
              cb();
            }
          })
        }
      });
    }
  }
}

