const mongoose = require('mongoose')
const express = require('express')
const app = express()
const port = 3005

mongoose.connect('mongodb://localhost/quiz')
const Quiz = require('../schemas/quiz')
const User = require('../schemas/user')

app.get('/quizzes', function (req, res) {
  Quiz.find().then(quizzes => res.send(quizzes))
})

app.get('/quizzes/:title', function (req, res) {
  Quiz.findOne({ title: req.params.title }).then(quiz => res.send(quiz))
})

app.get('/users', function (req, res) {
  User.find().then(users => res.send(users))
})

app.get('/users/:email', function (req, res) {
  User.findOne({ email: req.params.email }).then(users => res.send(users))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// To restart the database: mongoose.connection.db.dropDatabase()
