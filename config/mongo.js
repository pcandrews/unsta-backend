exports.configuration = {
  getUri: (env) => {
    return  env ? `mongodb://localhost:27017/notifications_${env}` : 'mongodb://localhost:27017/notifications'
  }
}