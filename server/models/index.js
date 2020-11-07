var db = require('../db');


module.exports = {
  messages: {
    get: function (cb) {
      db.datab.query('SELECT * FROM messages', (err, result) => {
        if (err) {
          cb(err);
        } else {
          cb(null, result);
        }
      });

    }, // a function which produces all the messages
    post: function (message, cb) {
      db.datab.query(`INSERT IGNORE INTO users (username) VALUES ('${message.username}');`, (err) => {
        if (err) {
          console.log(err);
          cb(err);
        } 
      });
      db.datab.query(`INSERT IGNORE INTO rooms (roomname) VALUES ('${message.roomname}');`, (err) => {
        if (err) {
         
          cb(err);
        } 
      });
      db.datab.query(`INSERT IGNORE INTO messages (message, user_id, room_id) VALUES (?, (SELECT id FROM users WHERE users.username = '${message.username}'), (SELECT id FROM rooms WHERE rooms.roomname = '${message.roomname}'));`, [message.message], (err, result) => {
        if (err) {
         
          cb(err);
        } else {
          
          cb(null, result);
        }
      });

    }

    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      db.datab.query('SELECT * FROM users', (err, result) => {
        if (err) {
          cb(err);
        } else {
          cb(null, result);
        }
      });
    },

    post: function (user, cb) {
      
      db.datab.query(`INSERT IGNORE INTO users (username) VALUES ('${user.username}');`, (err, result) => {
        if (err) {
          cb(err);
        } else {
          cb(null, result);
        }
      });
    }
  }
};

