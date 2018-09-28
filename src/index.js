const mongoose = require('mongoose')
const express = require('express')
// const cors = require('cors')
const app = express()
const port = 9005

mongoose.connect('mongodb://localhost/quiz')
const Quiz = require('../schemas/quiz')
const User = require('../schemas/user')
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Content-Type', 'application/json');
  next();
});
// const corsOptions = {
//   origin: 'http://localhost/quizzes.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

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
