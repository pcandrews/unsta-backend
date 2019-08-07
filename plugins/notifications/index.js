exports.plugin = {
  name: 'NotificationsPlugin',
  version: '1.0.0',
  register: (server, options) => {
    server.route(require('./notifications.routes'))
  }
}