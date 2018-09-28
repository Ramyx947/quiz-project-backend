const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')
const Quiz = require('../schemas/quiz')

Quiz.create({
  title: 'My test quiz',
  subject: 'JS',
  questions: [
    {
      text: 'How old are you?',
      choices: [
        { text: '40', chosen: false, correct: false },
        { text: '30', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      text: 'How old are you?',
      choices: [
        { text: '40', chosen: false, correct: false },
        { text: '30', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      text: 'How old are you?',
      choices: [
        { text: '40', chosen: false, correct: false },
        { text: '30', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    }
  ]
})

Quiz.find().then(quizzes => console.log(quizzes))
