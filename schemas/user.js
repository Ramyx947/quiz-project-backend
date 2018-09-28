const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: { type: String, required: true, index: false },
  email: { type: String, required: true, index: true },
  quizzes: [{
    title: { type: String, required: true, index: false },
    subject: { type: String, required: true, index: true },
    questions: [{ text: String, choices: [{ text: String, chosen: Boolean, correct: Boolean }] }]
  }]
})

module.exports = mongoose.model('User', userSchema)
