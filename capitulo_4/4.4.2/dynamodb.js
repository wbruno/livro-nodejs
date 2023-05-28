const { DynamoDBClient } = require('@aws-sdk/client-dynamodb')
const { DynamoDBDocumentClient, ScanCommand, PutCommand } = require('@aws-sdk/lib-dynamodb')

const dynamodb = new DynamoDBClient({ endpoint: 'http://127.0.0.1:8000' })
const documentClient = DynamoDBDocumentClient.from(dynamodb, { removeUndefinedValues: true })

const list = () => {
    const config = {
        TableName: 'Planets',
        Limit: 10
    }
    const params = new ScanCommand(config)
    return documentClient.send(params)
}

list().then(r => console.log(r))

const put = (data) => {
    const params = new PutCommand({
        TableName: 'Planets',
        Item: data,
        ReturnValues: 'ALL_OLD'
    })
    return documentClient.send(params)
}

put({ name: 'Dagobah', suns: 1, moons: 1 }).then(r => console.log(r))