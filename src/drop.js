const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/quiz')
  .then(() => mongoose.connection.db.dropDatabase())
  .then(() => mongoose.connection.close())
