require('dotenv').config()
const { mockClient } = require('aws-sdk-client-mock')
const { DynamoDBDocumentClient, GetCommand } = require ('@aws-sdk/lib-dynamodb')
const ddbMock = mockClient(DynamoDBDocumentClient)
ddbMock
  .on(GetCommand)
  .resolves({ Item: undefined })
  .on(GetCommand, {
    TableName: 'Shortener',
    Key: { id: 'iNxun1bg5Y' }
  })
  .resolves({ Item: { link: 'https://www.novatec.com.br/livros/nodejs-3ed/' } })
