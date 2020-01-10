var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) { // a function which produces all the messages
    // fetch all messages
      var queryStr = 'select messages.id, messages.text, messages.roomname from messages \
                    left outer join users on (messages.userid=messages.id) \
                    order by messages.id desc';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },

    post: function (params, callbacks) { // a function which can be used to insert a message into the database
    // create a message
      var queryStr = 'insert into messages (text, userid, roomname) \
                    values (?, (select id from users where username = ? limit 1), ?)';

      db.query(queryStr, params, function(err, results) {
        callback(results);
      });
    }
  },


  users: {
    // Ditto as above.
    get: function (callback) {
      //fetch all users
      var queryStr = 'select * from users';
      db.query(queryStr, function(err, results) {
        callback(results);
      });
    },
    post: function (params, callback) {
      // create  a user
      var queryStr = 'insert into users(username) value (?)';
      db.query(queryStr, params, function(err, results) {
        callback(result);
      });
    }
  }
};

