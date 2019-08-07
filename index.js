const hapi = require('@hapi/hapi');

(async () => {
  const server = new hapi.server({
    port: 8888
  })

  try {
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