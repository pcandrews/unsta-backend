const Joi = require('@hapi/joi')

exports.getNotifications = {
  description: 'Get all Notifications',
  tags: ['api'],
  notes: ['Get all notifications from DB'],
  plugins: {
    'hapi-swagger': {
      responses:{
        200: {
          description: 'Successfully Found',
          schema: Joi.object({
            title: Joi.string(),
            description: Joi.string(),
            schedule: Joi.string(),
            important: Joi.string()
          }).label('Result')
        },
        400: {
          description: 'Something went wrong'
        }
      }
    }
  }
}

exports.postNotifications = {
  description: 'Post a regular notification',
  tags: ['api'],
  notes: ['Sends a regular notification'],
  plugins: {
    'hapi-swagger': {
      reponses: {
        201: {
          description: 'Successfully posted',
          schema: Joi.object({
            title: Joi.string(),
            description: Joi.string(),
            important: Joi.boolean()
          }).label('Result')
        },
        400: {
          description: 'Something went wrong'
        }
      }
    }
  },
  validate: {
    params: {
      tag: Joi.string().required(),
    },
    query: {
      delay: Joi.number().default(0)
    },
    payload: {
      title: Joi.string().required(),
      description: Joi.string().required(),
      important: Joi.string().required()
    }
  }
}

exports.postScheduledNotifications = {
  description: 'Post a scheduled notification',
  tags: ['api'],
  notes: ['Sends a scheduled notification'],
  plugins: {
    'hapi-swagger': {
      reponses: {
        201: {
          description: 'Successfully posted',
          schema: Joi.object({
            title: Joi.string(),
            description: Joi.string(),
            important: Joi.boolean()
          }).label('Result')
        },
        400: {
          description: 'Something went wrong'
        }
      }
    }
  },
  validate: {
    params: {
      tag: Joi.string().required(),
    },
    payload: {
      schedule: Joi.date().required(),
      title: Joi.string().required(),
      description: Joi.string().required(),
      important: Joi.boolean().required()
    }
  }
}