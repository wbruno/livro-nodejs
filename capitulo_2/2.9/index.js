const { parse } = require('node-html-parser')
const axios = require('axios')

const cvm = 9512
axios.get(`http://bvmf.bmfbovespa.com.br/cias-listadas/empresas-listadas/ResumoEmpresaPrincipal.aspx?codigoCvm=${cvm}&idioma=pt-br`)
  .then(result => {
    const root = parse(result.data)
    const name = root.querySelector('h2').text.trim()
    const ficha = root.querySelector('.ficha')


    console.log('ficha', ficha)

    const obj = {
      name

    }
  })
