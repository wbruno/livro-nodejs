const mongoist = require('mongoist')
const db = mongoist('mongodb://localhost:27017/livro_nodejs')
db.stormtroopers.find()
    .then(result => {
        console.log(result)
        process.exit()
    })
