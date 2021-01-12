#!/usr/bin/env node
const net = require('net')
const chatServer  = net.createServer()
const clientList  = []
const broadcast = (message, client) => {
  clientList
    .filter(item => item !== client)
    .forEach(item => item.write(message))
}
chatServer.on('connection', (client) => {
  client.write('Hi guest' + '!\n')
  clientList.push(client)
  client.on('data', (data) => broadcast(data, client))
  client.on('end', () => {
    console.log('client end', clientList.indexOf(client))
    clientList.splice(clientList.indexOf(client), 1)
  })
  client.on('error', (err) => console.log(err))
})
chatServer.listen(9000)
