const Joi = require('@hapi/joi')

module.exports = [
  {
    method: 'GET',
    path: '/notifications',
    handler: (request, h) => {
      return {message: 'it works'}
    }
  },
  {
    method: 'POST',
    path: '/notifications',
    handler: (request) => {
      return {
        message: 'Notification scheduled',
        title: request.payload.description
      }
    },
    config: {
      validate: {
        payload: {
          title: Joi.string().required(),
          description: Joi.string().required()
        }
      }
    }
  }
]