const fs = require('fs/promises')
const text = 'Star Wars (Brasil: Guerra nas Estrelas /Portugal: Guerra das Estrelas) é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.\n'
fs.writeFile('promise.txt', text)
  .then(_ => fs.readFile('async-await.txt'))
  .then(data => console.log(data.toString()))
