exports.configuration = {
  getUri: (env) => {
    return  env ? `mongodb://localhost:27017/UNSTA_${env}` : 'mongodb://localhost:27017/UNSTA'
  }
}