const redis = require('redis');
const { promisify } = require('util');
const client = redis.createClient({
  host: 'localhost',
  port: 6379
})
const setAsync = promisify(client.set).bind(client);
setAsync('jedi-code', 'Nao ha emocao, ha a paz. Nao ha ignorancia, ha conhecimento. Nao ha paixao, ha serenidade.Nao ha caos, ha harmonia. Nao ha morte, ha a Forca.')
  .then(result => {
    console.log(result)
    process.exit()
  })
