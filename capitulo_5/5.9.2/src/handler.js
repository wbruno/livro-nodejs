const html = `<html>
<head><title>301 Moved Permanently</title></head>
<body>
<center><h1>301 Moved Permanently</h1></center>
</body>
</html>`
const repository = require('./repository')
const redirect = (event) => {
    const params = event.pathParameters

    return repository.byId(params.id)
        .then(result => {
            console.log({ result })
            if (!result?.link) {
                throw new Error('not found')
            }
            return result
        })
        .then(result => {
            const headers = { Location: result.link }
            return { statusCode: 301, headers, body: html }
        })
        .catch((err) => {
          return { statusCode: 404, body: JSON.stringify(err) }
        })
}
module.exports = { redirect }