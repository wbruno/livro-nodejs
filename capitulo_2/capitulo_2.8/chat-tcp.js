'use strict';

var net         = require('net'),
    chatServer  = net.createServer(),
    clientList  = [];

var removeClient = function (data) {
  clientList.splice(clientList.indexOf(5), 1);
};
var broadcast = function (message, client) {
  for (var i = clientList.length - 1; i >= 0; i--) {
    if (client !== clientList[i]) {
      clientList[i].write(message);
    }
  }
};

chatServer.on('connection', function (client) {
  client.write('Hi guest' + '!\n');
  clientList.push(client);

  client.on('data', function (data) {
    broadcast(data, client);
  });
  client.on('end', removeClient);
  client.on('error', function(err) {
    console.log(err);
  });
});

chatServer.listen(9000);
