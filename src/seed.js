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
        { option: '30',
          chosen: false,
          correct: false },
        { option: '101',
          chosen: false,
          correct: false }
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

//Rails

Quiz.create({
  title: "Ruby on Rails Objective Type Questions",
  subject: 'Rails',
  questions: [
    {
      number: 1,
      text: "What is bundler?",
      choices: [
        { option: 'Self-contained bundles of gems. Useful for versioning',
          chosen: false,
          correct: false },
        { option: "Edit Gemfile, then run 'bundle install' or just 'bundle'",
          chosen: false,
          correct: true },
        { option: 'Ruby Version Manager. Install and manage multiple versions of Ruby',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 2,
      text: "What is gemset?",
      choices: [
        { option: 'Self-contained bundles of gems. Useful for versioning',
          chosen: false,
          correct: true },
        { option: "self-contained packages of Ruby code",
          chosen: false,
          correct: false },
        { option: 'Ruby Version Manager. Install and manage multiple versions of Ruby',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 3,
      text: "What is a gem?",
      choices: [
        { option: 'Self-contained bundles of gems. Useful for versioning',
          chosen: false,
          correct: false },
        { option: "self-contained packages of Ruby code",
          chosen: false,
          correct: true },
        { option: 'Ruby Version Manager. Install and manage multiple versions of Ruby',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 4,
      text: "What is Rails' object-relational mapping library?",
      choices: [
        { option: 'ActiveRecord',
          chosen: false,
          correct: true },
        { option: "",
          chosen: false,
          correct: false },
        { option: '',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 5,
      text: "What environments does Rails have by default?",
      choices: [
        { option: 'render :partial',
          chosen: false,
          correct: false },
        { option: "development, test, production",
          chosen: false,
          correct: true },
        { option: 'RAILS_ENV (RAILS_ENV=production)',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 5,
      text: "How should you order routes?",
      choices: [
        { option: '',
          chosen: false,
          correct: false },
        { option: "",
          chosen: false,
          correct: false },
        { option: 'From general to specific (`/ads/` and then `/ads/:id`)',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 6,
      text: "How do partials look compared to regular erb files?",
      choices: [
        { option: 'It is not associated with a model',
          chosen: false,
          correct: false },
        { option: "Their names begin with an underscore",
          chosen: false,
          correct: true },
        { option: 'None of the mentioned',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 7,
      text: "What does a model object do before it saves or updates data?",
      choices: [
        { option: 'It runs its validators',
          chosen: false,
          correct: true },
        { option: "Validate",
          chosen: false,
          correct: false },
        { option: 'rake db:migrate',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 8,
      text: "",
      choices: [
        { option: '',
          chosen: false,
          correct: false },
        { option: "",
          chosen: false,
          correct: false },
        { option: '',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 9,
      text: "What does Embedded Ruby (ERb) process as inputs?",
      choices: [
        { option: 'data from model objects',
          chosen: false,
          correct: false },
        { option: "HTTP methods (post, get, put, delete)",
          chosen: false,
          correct: false },
        { option: 'data from model objects AND the page template',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 10,
      text: "what does REST stand for?",
      choices: [
        { option: 'The Request State Transfer',
          chosen: false,
          correct: false },
        { option: "Representational State Transfer",
          chosen: false,
          correct: true },
        { option: 'None of the above',
          chosen: false,
          correct: false }
      ]
    },
  ]
})
