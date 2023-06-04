const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient } = require('@aws-sdk/lib-dynamodb')

const marshallOptions = {
  removeUndefinedValues: true
}

const localConfig = { endpoint: process.env.DYNAMODB_ENDPOINT }
/* istanbul ignore next */
const config = process.env.DYNAMODB_ENDPOINT ? localConfig : {}

const dynamodb = new DynamoDBClient(config)
const documentClient = DynamoDBDocumentClient.from(dynamodb, { marshallOptions })

module.exports = { dynamodb, documentClient }