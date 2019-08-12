const Joi = require('@hapi/joi')
const notiEvents = require('../events/notiEvents')

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
    path: '/notifications/{tag}/{delay}',
    handler: (request) => {
      notiEvents.emit('SEND_NOTIFICATION', request.params.tag, {
        title: request.payload.description
      })
      return {
        message: 'Notification scheduled',
        title: request.payload.description
      }
    },
    config: {
      validate: {
        params: {
          tag: Joi.string().required(),
          delay: Joi.number().optional()
        },
        payload: {
          title: Joi.string().required(),
          description: Joi.string().required()
        }
      }
    }
  }
]