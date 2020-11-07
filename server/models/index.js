//var db = require('../db');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'buddha', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false
  }
});

//define user table up here and then use sequelize sync below to edit
var User = db.define('Users', {
  username: Sequelize.STRING
});

var Message = db.define('Messages', {
  user_id: Sequelize.INTEGER,
  message: Sequelize.STRING,
  room_id: Sequelize.INTEGER,
  
});
var Rooms = db.define('Rooms', {
  roomname: Sequelize.STRING
  
});

module.exports = {
  messages: {
    get: function (cb) {
      // db.datab.query('SELECT * FROM messages', (err, result) => {
      //   if (err) {
      //     cb(err);
      //   } else {
      //     cb(null, result);
      //   }
      // });
      Message.sync()

        .then(function() {
          Message.findAll()
            .then(result => {
              cb(null, result);
            });
        })
        .catch((err) => {
          console.log(err);
          cb(err);
          db.close();
        });
        
        
    }, // a function which produces all the messages
    post: function (message, cb) {
      // db.datab.query(`INSERT IGNORE INTO users (username) VALUES ('${message.username}');`, (err) => {
      //   if (err) {
      //     console.log(err);
      //     cb(err);
      //   } 
      // });

      User.sync()
        .then(function () {
          User.findOrCreate({where: { username: message.username }, defaults: {}})
            .then(function (userResponse) {
              
              Rooms.sync()
                .then(function () {
                  Rooms.findOrCreate({where: {roomname: message.roomname }, defaults: {}})
                    .then(function (room) {
                      
                      Message.sync()
                        .then(function () {
                      
                          Message.create(
                            {
                              message: message.message,
                              room_id: room.id,
                              user_id: userResponse.id
                            }
                          )
                            .then(() => {
                              cb(null);
                            });
                        });
                    });
                });
            });
        })
        .catch(err => {
          console.log(err);
          cb(err);
        });
          
    
      // db.datab.query(`INSERT IGNORE INTO rooms (roomname) VALUES ('${message.roomname}');`, (err) => {
      //   if (err) {
         
      //     cb(err);
      //   } 
      // });
      // db.datab.query(`INSERT IGNORE INTO messages (message, user_id, room_id) VALUES (?, (SELECT id FROM users WHERE users.username = '${message.username}'), (SELECT id FROM rooms WHERE rooms.roomname = '${message.roomname}'));`, [message.message], (err, result) => {
      //   if (err) {
         
      //     cb(err);
      //   } else {
          
      //     cb(null, result);
      //   }
      // });

    }

    // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      // db.datab.query('SELECT * FROM users', (err, result) => {
      //   if (err) {
      //     cb(err);
      //   } else {
      //     cb(null, result);
      //   }
      // });
      User.sync()
        .then(function() {
          User.findAll()
            .then((result) => {
              cb(null, result);
            });
        })
        .catch((err)=> {
          console.log(err);
          cb(err);
        });
    },

    post: function (user, cb) {
      
      // db.datab.query(`INSERT IGNORE INTO users (username) VALUES ('${user.username}');`, (err, result) => {
      //   if (err) {
      //     cb(err);
      //   } else {
      //     cb(null, result);
      //   }
      // });
      console.log('username', user.username);
      User.sync()
        .then(function() {
         
          User.findOrCreate({where: {username: user.username}, defaults: {}})
            .then(()=> {
              cb(null);
            });
         
        })
        .catch(err => {
          console.log(err);
          cb(err);
        });
    }
  }
};

