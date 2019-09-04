const Users = require('./models/users.model')
const boom = require('@hapi/boom')

exports.getUsers = async (req, h) => {
  try {
    const users = await Users.find()
    return h.response(users)
  } catch (err) {
    throw boom.boomify(err, { statusCode: 400 })
  }
}

exports.postUsers = async (req, h) => {
  try {
    const users = new Users(req.payload)
    const result = await users.save()
    return h.response(result).code(201)
  } catch (err) {
    throw boom.boomify(err, { statusCode: 400 })
  }
}