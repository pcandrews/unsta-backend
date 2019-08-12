const hapi = require('@hapi/hapi');

(async () => {
  const wsserver = new hapi.server({
    port: 9999
  })

  const server = new hapi.server({
    port: 8888
  })

  try {
    // WS server
    await wsserver.register({
      plugin: require('@hapi/nes'),
      options: {
        onConnection: socket => {
          console.log(`Got a WS connection ${socket.id}`)
        },
        onDisconnection: socket => {
          console.log(`Client disconnected ${socket.id}`)
        }
      }
    })

    wsserver.subscription('/tag/{tag}', {
      onSubscribe: (socket, path) => {
        console.log(`${socket.id} subscribed to ${path}`)
      }
    })

    await wsserver.start()
    const notiEvents = require('./plugins/events/notiEvents')
    notiEvents.setWsServer(wsserver)

    // Web Server
    await server.register([
      require('./plugins/notifications/index')
    ],
    {
      routes: {
        prefix: '/api'
      }
    })
    server.start()
  } catch (err) {
    console.log(err)
  }
})()