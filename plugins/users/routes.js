const documentation = require('./documentation/users')
const handler = require('./handler')

module.exports = [
  {
    method: 'GET',
    path: '/users',
    handler:  handler.getUsers,
    config: documentation.getUsers
  },
  {
    method: 'POST',
    path: '/users',
    handler: handler.postUsers,
    config: documentation.postUser
  }
]