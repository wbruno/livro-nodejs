import loadtest from 'loadtest'
const statusCallback = (error, result, latency) => {
  if (error) console.error('error', error)
  if (parseInt(result?.requestIndex,10) % 100 === 0) {
    console.log('Request index: ', result?.requestIndex)
  }
}
const options = {
  url: 'http://localhost:3000/troopers',
  maxRequests: 1000,
  concurrency: 100,
  method: 'GET',
  contentType: 'application/json',
  headers: {},
  insecure: true,
  statusCallback
}
loadtest.loadTest(options, (error, result) => {
  if (error) {
    return console.log('Got an error: %s', error)
  }
  console.log(result)
})
