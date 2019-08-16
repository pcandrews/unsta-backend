const Joi = require('@hapi/joi')

exports.getUsers = {
  description: 'Get all users',
  tags: ['api','users'],
  notes: ['This get all users from DB'],
  plugins: {
    'hapi-swagger': {
      responses: {
        200: {
          description: 'Succesfully found',
          schema: Joi.object({
            name: Joi.string().required(),
            alumnCode: Joi.string().required(),
            career: Joi.string().required(),
            degree: Joi.string().required(),
            hierachy: Joi.string().required()
          }).label('GetUsers')
        },
        400: {
          description: 'Something went wrong'
        }
      }
    }
  }
}

exports.postUser = {
  description: 'Post a user',
  tags: ['api','users'],
  notes: ['Saves users data'],
  plugins: {
    'hapi-swagger': {
      reponses: {
        201: {
          description: 'Successfully posted',
          schema: Joi.object({
            name: Joi.string().required(),
            alumnCode: Joi.string().required(),
            career: Joi.string().required(),
            degree: Joi.string().required(),
            hierachy: Joi.string().required()
          }).label('PostUser')
        },
        400: {
          description: 'Something went wrong'
        }
      }
    }
  },
  validate: {
    payload: {
      name: Joi.string().required(),
      alumnCode: Joi.string().required(),
      career: Joi.string().required(),
      degree: Joi.string().required(),
      hierachy: Joi.string().required()
    }
  }
}