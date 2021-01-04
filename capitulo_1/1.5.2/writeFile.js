import fs from 'fs/promises'
const text = 'Star Wars (Brasil: Guerra nas Estrelas /Portugal: Guerra das Estrelas) é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.\n'
await fs.writeFile('async-await.txt', text)
const data = await fs.readFile('async-await.txt')
console.log(data.toString())
