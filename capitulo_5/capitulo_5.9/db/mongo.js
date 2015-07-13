var mongojs = require('mongojs');
'use strict';
function _connection() {
  var username  = '',
    password    = '',
    server      = 'localhost',
    port        = 21017,
    database    = 'livro_nodejs',
    auth        = username ? username + ':' + password + '@' : '';
  return 'mongodb://' + auth + server + ':' + port + '/' + database;
}
var db = mongojs(_connection());
module.exports = db;
