#!/usr/bin/env node
/**
 * loremipsum.js
 *
 * Faz uma requisição na API `http://loripsum.net/api/`
 * e grava um arquivo com o nome e a quantidade
 * de parágrafos especificados
 *
 * William Bruno, Maio de 2015
 */

const http = require('http');
const fs = require('fs');
const fileName = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi, '');
const quantityOfParagraphs = String(process.argv[3] || '').replace(/[^\d]/g, '');

const USAGE = 'USO: node loremipsum.js {nomeDoArquivo} {quantidadeDeParágrafos}';

if (!fileName || !quantityOfParagraphs) {
  return console.log(USAGE);
}

http.get('http://loripsum.net/api/' + quantityOfParagraphs, function(res) {
  let text = '';

  res.on('data', function (chunk) {
    text += chunk;
  });
  res.on('end', function () {
    fs.writeFile(fileName, text, function() {
      console.log('Arquivo ' + fileName + ' pronto!');
    });
  });
}).on('error', function(e) {
  console.log('Got error: ' + e.message);
});
