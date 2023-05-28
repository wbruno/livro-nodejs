const fs = require('fs')
fs.readFile('naoexisto.txt', (err, data) => {
    console.error({ err })
    console.log({ data })
})