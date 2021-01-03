const redis = require('redis');
const { promisify } = require('util');
const client = redis.createClient({
  host: 'localhost',
  port: 6379
})
const getAsync = promisify(client.get).bind(client);
getAsync('jedi-code')
  .then(result => {
    console.log(result)
    process.exit()
  })
