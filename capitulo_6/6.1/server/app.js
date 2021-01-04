import express from 'express'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import nunjucks from 'nunjucks'
const app = express()
app.get('/', (request, response) => response.send('Always pass on what you have learned.'))
const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '../');
app.use(express.static(path.join(__dirname, 'public')))
export default app
