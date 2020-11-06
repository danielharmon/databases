var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {

      models.messages.get((err, result) => {
        if (err) {
          res.status(404).end();
        } else {
          res.send(result);

        }
      });


    },
    post: function (req, res) {

      models.messages.post(req.body, (err) => {
        if (err) {
          res.status(500).end();

        } else {
          res.status(200).end();
        }
      });

    } // a function which handles posting a message to the database
  },


  users: {
    // Ditto as above
    get: function (req, res) {
      //console.log('req messages' ,req);
      models.users.get((err,result) => {
        if (err) {
          res.status(404).end();
        } else {
          res.send(result).end();
        }
      })

    },
    post: function (req, res) {
      //console.log('res messages' ,req);
      models.users.post(req.body, (err) => {
        if (err) {
          res.status(404).end();
        } else {
          res.status(200).end();
        }
      })

    }
  }

};


