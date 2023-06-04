require('dotenv').config()
const { mockClient } = require('aws-sdk-client-mock')
const { DynamoDBDocumentClient, GetCommand, QueryCommand, PutCommand, ScanCommand, DeleteCommand } = require ('@aws-sdk/lib-dynamodb')
const ddbMock = mockClient(DynamoDBDocumentClient)
const mockData = {
  link: 'https://www.novatec.com.br/livros/nodejs-3ed/'
}
ddbMock
  .on(GetCommand)
  .resolves({ Item: undefined })
  .on(GetCommand, {
    TableName: 'Shortener',
    Key: { id: 'iNxun1bg5Y' }
  })
  .resolves({ Item: mockData })

ddbMock
  .on(QueryCommand)
  .resolves({ Items: [mockData] })

ddbMock
  .on(PutCommand).resolves({})
  .on(DeleteCommand).resolves({})
ddbMock.on(ScanCommand).resolves({ Items: [mockData] })