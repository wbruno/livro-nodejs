const { byId, create, remove, list, update } = require('../src/shortener')

it('#byId', async () => {
  const result = await byId({
    headers: {},
    pathParameters: { id: 'iNxun1bg5Y' }
  })
  const expected = {
    link: 'https://www.novatec.com.br/livros/nodejs-3ed/'
  }
  const body = JSON.parse(result.body || '{}')

  expect(expected).toEqual(body)
  expect(result.statusCode).toEqual(200)
  expect(typeof result.body).toEqual('string')
})

it('#create', async () => {
    const result = await create({
      body: '{"link": "https://www.novatec.com.br/livros/nodejs-3ed/"}',
      pathParameters: {}
    })
    const expected = {
      message: 'created'
    }
    const body = JSON.parse(result.body || '{}')
  
    expect(expected).toEqual(body)
    expect(201).toEqual(result.statusCode)
    expect(typeof result.body).toEqual('string')
})
it('#list', async () => {
  const result = await list({ headers: {} })
  const expected = {
    size: 50,
    links: [{}],
    items: [{ link: 'https://www.novatec.com.br/livros/nodejs-3ed/' }]
  }
  const body = JSON.parse(result.body || '{}')

  expect(body).toEqual(expected)
  expect(result.statusCode).toEqual(200)
  expect(typeof result.body).toEqual('string')
})
it('#remove', async () => {
  const result = await remove({
    headers: {},
    pathParameters: { id: 'iNxun1bg5Y' }
  })

  expect(result.body).toEqual('')
  expect(result.statusCode).toEqual(200)
  expect(typeof result.body).toEqual('string')
})

it('#update', async () => {
  const result = await update({
    body: '{"link": "https://www.novatec.com.br/livros/nodejs-3ed/"}',
    pathParameters: { id: 'iNxun1bg5Y' }
  })
  const expected = {
    message: 'updated'
  }
  const body = JSON.parse(result.body || '{}')

  expect(expected).toEqual(body)
  expect(200).toEqual(result.statusCode)
  expect(typeof result.body).toEqual('string')
})