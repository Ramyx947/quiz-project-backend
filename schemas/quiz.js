const mongoose = require('mongoose')
const Schema = mongoose.Schema

const quizSchema = new Schema({
  title: { type: String, required: true, index: false },
  subject: { type: String, required: true, index: true },
  questions: [{ text: String, choices: [{ text: String, chosen: Boolean, correct: Boolean }] }]
})

module.exports = mongoose.model('Quiz', quizSchema)
