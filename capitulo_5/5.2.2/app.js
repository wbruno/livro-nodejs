import express from 'express'
const app = express()
const data = { 'name': 'William Bruno', 'email': 'wbrunom@gmail.com' };
app.get('/', (request, response) => {
  response.format({
    text: () => {
      const keys = Object.keys(data)
      const values = Object.values(data)
      response.write(`${keys.join('; ')}\n`)
      response.write(`${values.join('; ')}\n`)
      response.end()
    },
    default: () => {
      response.json(data)
    }
  })
})

app.listen(3000)
