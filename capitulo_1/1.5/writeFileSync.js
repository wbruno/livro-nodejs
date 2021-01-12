const fs = require('fs')
const text = 'Star Wars (Brasil: Guerra nas Estrelas /Portugal: Guerra das Estrelas) é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.\n'
fs.writeFileSync('sync.txt', text)
const data = fs.readFileSync('sync.txt')
console.log(data.toString())
