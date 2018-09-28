const mongoose = require('mongoose')
const Quiz = require('../schemas/quiz')
const User = require('../schemas/user')

mongoose.connect('mongodb://localhost/quiz', { useNewUrlParser: true })

User.create({ name: 'Ramona', email: 'ramona@email.com' })
User.create({ name: 'Maduri', email: 'maduri@email.com' })
User.create({ name: 'Nicolas', email: 'nicolas@email.com' })

Quiz.create({
  title: "JavaScript interview questions",
  subject: 'JS',
  questions: [
    {
      number: 1,
      text: 'What is functional programming??',
      choices: [
        { option: 'Functional programming produces programs by composing mathematical functions and avoids shared state & mutable data.', 
          chosen: false,
          correct: true },
        { option: '30', chosen: false, correct: true },
        { option: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 2,
      text: 'Which two options represent class inheritance??',
      choices: [
        {
          option: 'Inheritances inherit from classes and create sub-classes relationships.',
          chosen: false,
          correct: true
        },
        { option: 'Are typically instantiated via constructor functions',
          chosen: false,
          correct: true },
        { option: '101',
          chosen: false,
          correct: false }
      ]
    },
    {
      text: 'What is prototypal inheritance??',
      choices: [
        {
          number: 3,
          option: '',
          chosen: false,
          correct: true
        },
        { option: 'Instances are typically instantiated via `Object.create()`. ',
          chosen: false,
          correct: true },
        { option: 'Instances may be composed from many different objects, allowing for easy selective inheritance.',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 4,
      text: 'What is asynchronous programming?',
      choices: [
        {
          option: 'Code is executed sequentially from top-to-bottom.',
          chosen: false,
          correct: true
        },
        { option: '30', chosen: false, correct: false },
        { option: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 5,
      text: 'Given a number of elements that need to stay in order, would you use an Object or an Array??',
      choices: [
        {
          option: 'Object.',
          chosen: false,
          correct: false
        },
        { option: 'Array',
          chosen: false,
          correct: true },
        { option: '101',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 6,
      text: 'Given a collection of artists and lists of their songs, would you store the artist-song-list pairs in an Object or an Array??',
      choices: [
        {
          option: 'Object',
          chosen: false,
          correct: true
        },
        { option: 'Array',
          chosen: false,
          correct: false },
        { option: '101',
          chosen: false, 
          correct: false }
      ]
    },
    {
      number: 7,
      text: `Given the array const letters = ["alpha", "gamma", "delta"], which operation(s) return the array ["alpha", "beta", "gamma", "delta"]?`,
      choices: [
        {
          option: 'Code is executed sequentially from top-to-bottom.',
          chosen: false,
          correct: false
        },
        { option: '30',
          chosen:false,
          correct: false },
        { option: `[...letters.slice(0, 1), 'beta', ...letters.slice(1)]`,
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 8,
      text: 'What is asynchronous programming??',
      choices: [
        {
          option: 'Code is executed sequentially from top-to-bottom.',
          chosen: false,
          correct: true
        },
        { option: '30',
          chosen: false,
          correct: false },
        { option: '101', 
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 9,
      text: 'What is asynchronous programming??',
      choices: [
        {
          option: 'Code is executed sequentially from top-to-bottom.',
          chosen: false,
          correct: true
        },
        { option: '30',
          chosen: false,
          correct: false },
        { option: '101',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 10,
      text: 'What is asynchronous programming??',
      choices: [
        {
          option: 'Code is executed sequentially from top-to-bottom.',
          chosen: false,
          correct: true
        },
        { option: '30',
          chosen: false,
          correct: false },
        { option: '101',
          chosen: false,
          correct: false }
      ]
    }
  ]
})

Quiz.create({
  title: "Maduri's quiz",
  subject: 'JS',
  questions: [
    {
      text: 'Why am I still here?',
      choices: [
        { text: 'No idea...',
          chosen: false,
          correct: false },
        { text: 'Because I rock.',
        chosen: false, correct: true },
        { text: 'Why do you care?', chosen: false, correct: false }
      ]
    }
  ]
})

Quiz.create({
  title: "Ramona's quiz",
  subject: 'JS',
  questions: [
    {
      text: 'Wazzup?',
      choices: [
        { text: 'Not much.', chosen: false, correct: false },
        { text: 'Having a great time with Nico.', chosen: false, correct: true },
        { text: 'Time for a beer!', chosen: false, correct: false }
      ]
    }
  ]
})
