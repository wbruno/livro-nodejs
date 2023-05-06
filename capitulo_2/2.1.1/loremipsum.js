#!/usr/bin/env node

/**
 * loremipsum.js
 *
 * Faz uma requisição na API `http://loripsum.net/api/`
 * e grava um arquivo com o nome e a quantidade
 * de parágrafos especificados
 *
 * William Bruno, Maio de 2015
 * William Bruno, Dezembro de 2020 – Atualizado para es6
 * William Bruno, Maio de 2023 – Usa fetch em vez de http
*/
const fs = require('fs');
const fileName = String(process.argv[2] || '').replace(/[^a-z0-9\.]/gi, '');
const quantityOfParagraphs = String(process.argv[3] || '').replace(/[^\d]/g, '');
const USAGE = 'USO: node loremipsum.js {nomeArquivo} {quantidadeParágrafos}';
if (!fileName || !quantityOfParagraphs) {
    return console.log(USAGE);
}
fetch('http://loripsum.net/api/' + quantityOfParagraphs)
    .then(res => res.text())
    .then(text => {
        fs.writeFile(fileName, text, () => {
            console.log('Arquivo ' + fileName + ' pronto!');
        });
    })
    .catch((e) => {
        console.log('Got error: ' + e.message);
    });
