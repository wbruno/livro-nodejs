const { ScanCommand, GetCommand, PutCommand, DeleteCommand } = require('@aws-sdk/lib-dynamodb')
const debug = require('debug')('wbruno:repository')
const { nanoid } = require('nanoid')
const { documentClient } = require('./config/dynamodb')
const getNextLink = (data) => {
  if (data?.LastEvaluatedKey) {
    const urlParams = qs.stringify(data.LastEvaluatedKey)
    return {
      rel: 'next',
      href: `?${urlParams}`
    }
  }
  return {}
}
const repository = {
    DEFAULT_SIZE: '50',
    TABLE_NAME: 'Shortener',

    list(query, sizeParam) {
        const size = parseInt(sizeParam || this.DEFAULT_SIZE, 10)
    
        const config = {
          TableName: this.TABLE_NAME,
          Limit: size
        }
    
        if (Reflect.has(query, 'id')) {
          config.ExclusiveStartKey = { id: query.id }
        }
        debug({ config })
    
        const params = new ScanCommand(config)
        return documentClient.send(params).then((result) => {
          return {
            size,
            links: [getNextLink(result)],
            items: result.Items || []
          }
        })
    },

    byId(id) {
        debug({ id })
        const params = new GetCommand({
            Key: { id },
            TableName: this.TABLE_NAME
        })
        return documentClient.send(params).then((result) => result.Item)
    },

    put(data, existendId) {
        const id = existendId || nanoid()
        const params = new PutCommand({
          TableName: this.TABLE_NAME,
          Item: {
            id,
            ...data
          },
          ReturnValues: 'ALL_OLD'
        })
    
        return documentClient.send(params)
    },
    
    delete(id) {
        const params = new DeleteCommand({
          TableName: this.TABLE_NAME,
          Key: { id }
        })
    
        return documentClient.send(params).then((_) => ({}))
    } 
}
module.exports = repository