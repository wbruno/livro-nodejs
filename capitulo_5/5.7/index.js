const fastify = require('./src/app')
const dnscache = require('dnscache')
const cluster = require('cluster')
const http = require('http')
const https = require('https')
const cpus = require('os').cpus()
http.globalAgent.keepAlive = true
https.globalAgent.keepAlive = true
dnscache({
  enable: true,
  ttl: 300,
  cachesize: 1000
})
const onWorkerError = (code, signal) => log(code, signal)
if (cluster.isMaster) {
  cpus.forEach(_ => {
    const worker = cluster.fork()
    worker.on('error', onWorkerError);
  })
  cluster.on('exit', (err) => {
    const newWorker = cluster.fork()
    newWorker.on('error', onWorkerError)
    log('A new worker rises', newWorker.process.pid)
  })
  cluster.on('exit', (err) => log(err))
} else {
  fastify.listen(3000, (err, address) => {
    if (err) throw err
    fastify.log.info(`server listening on ${address}`)
  })
}
