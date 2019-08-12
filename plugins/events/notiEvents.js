const EventEmitter = require('events');
let ws

class NotificationEmitterClass extends EventEmitter {
  constructor() {
    super()
  }

  setWsServer(wsserver) {
    ws = wsserver
  }
}

const notiEmitter = new NotificationEmitterClass()

notiEmitter.on('SEND_NOTIFICATION', (tag, noti) => {
  ws.publish(`/tag/${tag}`, {
    payload: noti
  })
})

module.exports = notiEmitter