const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NotificationsSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  important: {type: Boolean, required: false},
  schedule: {type: Date, required: false},
  tag: {type: String, required: false}
},
{
  collection: 'notifications'
})

module.exports = mongoose.model('NotificationsSchema', NotificationsSchema)