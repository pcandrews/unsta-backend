const handler = require('./handlers')
const documentation = require('./documentation/notifications')

module.exports = [
  {
    method: 'GET',
    path: '/notifications',
    handler: handler.getNotifications,
    config: documentation.getNotifications
  },
  {
    method: 'POST',
    path: '/notifications/{tag}',
    handler: handler.postNotifications,
    config: documentation.postNotifications
  },
  {
    method: 'POST',
    path: '/notifications/scheduled/{tag}',
    handler: handler.postScheduledNotifications,
    config: documentation.postScheduledNotifications
  }
]