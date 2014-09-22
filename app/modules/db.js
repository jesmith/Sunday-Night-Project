var mysql      = require('mysql');
var config		 = require('../config.json')
var connection = mysql.createConnection({
  host     : config.db.host,
  user     : config.db.user,
  password : config.db.password
});

connection.connect();

module.exports = connection;