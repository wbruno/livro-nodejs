const { redirect } = require('../src/handler')
const event = {
	"resource": "/{id}",
	"path": "/iNxun1bg5Y",
	"httpMethod": "GET",
	"pathParameters": {
		"id": "iNxun1bg5Y"
	},
	"body": null,
	"isBase64Encoded": false
}

it('#redirect', async () => {
    const result = await redirect(event)
    expect(result.statusCode).toBe(301)
    expect(result.headers).toEqual({ Location: 'https://www.novatec.com.br/livros/nodejs-3ed/' })
    expect(typeof result.body).toBe('string')
})
it('#redirect link non existent', async () => {
    const result = await redirect({ pathParameters: { id: 'non-existent' }})
    expect(result.statusCode).toBe(404)
    expect(result.body).toBe('{}')
})