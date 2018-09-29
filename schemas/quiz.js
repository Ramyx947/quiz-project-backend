const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
  title: { type: String, required: true, index: false },
  subject: { type: String, required: true, index: true },
  questions: [{ number: String, text: String, choices: [{ option: String, chosen: Boolean, correct: Boolean }] }],
  explanation: String
})

module.exports = mongoose.model('Quiz', quizSchema)
