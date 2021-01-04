import express from 'express'
import path from 'path'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import nunjucks from 'nunjucks'
const app = express()
const __dirname = path.join(dirname(fileURLToPath(import.meta.url)), '../')
app.set('view engine', 'html')
app.set('views', path.join(__dirname, 'views'))
nunjucks.configure('views', {
  autoescape: true,
  express: app,
  tags: ''
})
app.get('/', (request, response) => {
    response.render('index', { title: 'Stormtroopers API', message: 'Always pass on what you have learned.' })
})
app.get('/loop', (request, response) => {
    const movies = [
        { name: 'Episode I: The Phantom Menace', release: 1999 },
        { name: 'Episode II: Attack of the Clones', release: 2002 },
        { name: 'Episode III: Revenge of the Sith', release: 2005 },
        { name: 'Rogue One: A Star Wars Story', release: 2016 },
        { name: 'Episode IV: A New Hope', release: 1977 },
        { name: 'Episode V: The Empire Strikes Back', release: 1980 },
        { name: 'Episode VI: Return of the Jedi', release: 1983 },
        { name: 'Episode VII: The Force Awakens', release: 2015 },
        { name: 'Episode VIII: The Last Jedi', release: 2017 },
        { name: 'Solo: A Star Wars Story', release: 2018 },
        { name: 'Episode IX: The Rise of Skywalker', release: 2019 },
    ]
    response.render('loop', { title: 'Loop page', movies })
})
app.get('/if', (request, response) => {
    response.render('if', { title: 'if', is3D: false })
})
app.use(express.static(path.join(__dirname, 'public')))
export default app
