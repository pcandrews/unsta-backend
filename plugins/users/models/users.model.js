const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UsersSchema = new Schema({
  name: { type: String, required: true},
  alumnCode: { type: String, required: true},
  career: { type: String, required: true},
  degree: { type: String, required: true},
  hierarchy: { type: String, required: true }
},
{
  collection: 'users'
})

module.exports = mongoose.model('UsersSchema', UsersSchema)