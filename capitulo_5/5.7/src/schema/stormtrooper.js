const body = {
  type: 'object',
  required: ['name', 'patent'],
  properties: {
    _id: { type: 'string' },
    name: { type: 'string' },
    nickname: { type: 'string' },
    patent: {
      type: 'string',
      enum: ['General', 'Colonel', 'Commander', 'Major', 'Captain', 'Lieutenant', 'Sergeant', 'Soldier']
    },
    divisions: {
      type: 'array',
      items: { type: 'string' }
    },
  }
}
const query = {}
const params = {
  type: 'object',
  properties: {
    id: { type: 'string' }
  }
}
const headers = {}
module.exports = { body, query, params, headers }
