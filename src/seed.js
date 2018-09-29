const mongoose = require('mongoose')
const Quiz = require('../schemas/quiz')
const User = require('../schemas/user')

mongoose.connect('mongodb://localhost/quiz', { useNewUrlParser: true })

User.create({ name: 'Ramona', email: 'ramona@email.com' })
User.create({ name: 'Maduri', email: 'maduri@email.com' })
User.create({ name: 'Nicolas', email: 'nicolas@email.com' })


Quiz.create({
  title: "Ruby",
  subject: 'Ruby',
  questions: [
    {
      number: 1,
      text: 'Ruby is an ____ interpreted scripting language.',
      choices: [
        { option: 'Binary',
          chosen: false,
          correct: false },
        { option: 'Object-Oriented',
          chosen: false,
          correct: true },
        { option: 'Logical',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 2,
      text: 'When more than one operation is involved, the Ruby interpreter evaluates the order in which expressions must be carried out. What is the term that describes this?',
      choices: [
        { option: 'Operator Levels',
          chosen: false,
          correct: false },
        { option: 'Operator Limits',
          chosen: false,
          correct: false },
        { option: 'Operator Precedence',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 3,
      text: 'Ruby is considered to be a clean, ____ purpose language.',
      choices: [
        { option: 'Single',
          chosen: false,
          correct: false },
        { option: 'Specific',
          chosen: false,
          correct: false },
        { option: 'General',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 4,
      text: 'What is the name of a stored value – primarily used for reference purposes – that can include an integer, string, or character?',
      choices: [
        { option: 'Variable',
          chosen: false,
          correct: true },
        { option: 'Constant',
          chosen: false,
          correct: false },
        { option: 'Expression',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 5,
      text: 'Variables that are accessible anywhere in a Ruby program regardless of scope are called what?',
      choices: [
        { option: 'Global Variables',
          chosen: false,
          correct: true },
        { option: 'Local Variables',
          chosen: false,
          correct: false },
        { option: 'Temporary Variables',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 6,
      text: 'Which of the following are valid floating point literal?',
      choices: [
        { option: '0.5',
          chosen: false,
          correct: true },
        { option: '2',
          chosen: false,
          correct: false },
        { option: '.5',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 7,
      text: 'Why can not we use quotation marks (‘ or “) with boolean?',
      choices: [
        { option: 'It indicates that we are talking about a string',
          chosen: false,
          correct: true },
        { option: 'It indicates that that we are replacing boolean data type with string data type',
          chosen: false,
          correct: false },
        { option: 'It indicates that we are assigning a value',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 8,
      text: 'Which of the following is not a valid datatype?',
      choices: [
        { option: 'Float',
          chosen: false,
          correct: false },
        { option: 'Binary',
          chosen: false,
          correct: false },
        { option: 'Timedate',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 9,
      text: 'Why is the library function ‘puts’used for?',
      choices: [
        { option: 'Prints whatever is given and print it to the screen',
          chosen: false,
          correct: false },
        { option: 'Prints whatever is given and insert a new(blank) line',
          chosen: false,
          correct: true },
        { option: 'Gets input from the user',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 10,
      text: 'For getting an input from the user which method is used?',
      choices: [
        { option: 'gets.chomp',
          chosen: false,
          correct: true },
        { option: 'get',
          chosen: false,
          correct: false },
        { option: 'chomp',
          chosen: false,
          correct: false }
      ]
    },
  ]
})


Quiz.create({
  title: "react",
  subject: 'React',
  questions: [
    {
      number: 1,
      text: 'Which of the following concepts is/are key to ReactJS?',
      choices: [
        { option: 'Component-oriented design',
          chosen: false,
          correct: false },
        { option: 'Event delegation model',
          chosen: false,
          correct: false },
        { option: 'Both of the above',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 2,
      text: 'ReactJS focuses on which of the following part when considering MVC?',
      choices: [
        { option: 'M (Model)',
          chosen: false,
          correct: false },
        { option: 'V (View)',
          chosen: false,
          correct: true },
        { option: 'C (Controller)',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 3,
      text: 'Which of the following API is a MUST for every ReactJS component?',
      choices: [
        { option: 'getInitialState',
          chosen: false,
          correct: false },
        { option: 'render',
          chosen: false,
          correct: true },
        { option: 'renderComponent',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 4,
      text: 'One can define default values for properties, props, using which of the following method?',
      choices: [
        { option: 'getDefaultProps',
          chosen: false,
          correct: true },
        { option: 'getPropsValue',
          chosen: false,
          correct: false },
        { option: 'getInitialState',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 5,
      text: 'Life cycle methods of a components fall under following categories?',
      choices: [
        { option: 'Mounting, Unmounting',
          chosen: false,
          correct: false },
        { option: 'Mounting, Updating',
          chosen: false,
          correct: false },
        { option: 'Mounting, Updating, Unmounting',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 6,
      text: 'Which of the following mounting methods is/are invoked before the component is inserted into DOM?',
      choices: [
        { option: 'getInitialState',
          chosen: false,
          correct: false },
        { option: 'getInitialState, componentWillMount',
          chosen: false,
          correct: true },
        { option: 'getInitialState, componentDidMount',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 7,
      text: 'Which of the following methods change the state of the component?',
      choices: [
        { option: 'forceUpdate',
          chosen: false,
          correct: false },
        { option: 'setState',
          chosen: false,
          correct: false },
        { option: 'Both of the above',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 8,
      text: 'The default value of input field could be set using which of the following attribute?',
      choices: [
        { option: 'value',
          chosen: false,
          correct: false },
        { option: 'defaultValue',
          chosen: false,
          correct: true },
        { option: 'Both of the above',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 9,
      text: 'React considers everything as ____',
      choices: [
        { option: 'elements',
          chosen: false,
          correct: false },
        { option: 'components',
          chosen: false,
          correct: true },
        { option: 'Objects',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 10,
      text: ' What is the smallest building block of ReactJS?',
      choices: [
        { option: 'props',
          chosen: false,
          correct: false },
        { option: 'elements',
          chosen: false,
          correct: true },
        { option: 'components',
          chosen: false,
          correct: false }
      ]
    },
  ]
})



Quiz.create({
  title: "JavaScript interview questions",
  subject: 'JS',
  questions: [
    {
      number: 1,
      text: 'Which of the following is a disadvantage of using JavaScript?',
      choices: [
        { option: 'Client-side JavaScript does not allow the reading or writing of files.',
          chosen: false,
          correct: false },
        { option: "JavaScript doesn't have any multithreading or multiprocess capabilities.",
          chosen: false,
          correct: false },
        { option: 'All of the above',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 2,
      text: 'Which built-in method returns the character at the specified index?',
      choices: [
        {
          option: 'characterAt()',
          chosen: false,
          correct: false },
        { option: 'getCharAt()',
          chosen: false,
          correct: false },
        { option: 'charAt()',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 3,
      text: 'Which of the following function of String object extracts a section of a string and returns a new string?',
      choices: [
        {
          option: 'slice()',
          chosen: false,
          correct: true },
        { option: 'split()',
          chosen: false,
          correct: false },
        { option: 'replace()',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 4,
      text: 'Inside which HTML element do we put the JavaScript?',
      choices: [
        {
          option: '<script>',
          chosen: false,
          correct: true
        },
        { option: '<javascript>',
          chosen: false,
          correct: false },
        { option: '<js>',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 5,
      text: 'Given a number of elements that need to stay in order, what would you use?',
      choices: [
        {
          option: 'Object',
          chosen: false,
          correct: false
        },
        { option: 'Array',
          chosen: false,
          correct: true },
        { option: 'Both of the above',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 6,
      text: 'How do you write "Hello World" in an alert box?',
      choices: [
        {
          option: 'msg("Hello World");',
          chosen: false,
          correct: false
        },
        { option: 'alertBox("Hello World");',
          chosen: false,
          correct: false },
        { option: 'alert("Hello World");',
          chosen: false,
          correct: true }
      ]
    },
    {
      number: 7,
      text: 'How do you call a function named "myFunction"?',
      choices: [
        {
          option: 'call myFunction()',
          chosen: false,
          correct: false
        },
        { option: 'myFunction()',
          chosen: false,
          correct: true },
        { option: 'call function myFunction()',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 8,
      text: 'How does a FOR loop start?',
      choices: [
        {
          option: ' for (i <= 5; i++)',
          chosen: false,
          correct: false
        },
        { option: 'for (i = 0; i <= 5; i++)',
          chosen: false,
          correct: true },
        { option: 'for (i = 0; i <= 5)',
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 9,
      text: ' How do you insert a comment that has more than one line?',
      choices: [
        {
          option: `/*This comment has more than one line*/`,
          chosen: false,
          correct: true
        },
        { option: `//This comment has more than one line//`,
          chosen: false,
          correct: false },
        { option: `<!--This comment has more than one line-->`,
          chosen: false,
          correct: false }
      ]
    },
    {
      number: 10,
      text: 'What is the correct way to write a JavaScript array?',
      choices: [
        {
          option: 'var colors = (1:"red", 2:"green", 3:"blue")',
          chosen: false,
          correct: false
        },
        { option: "var colors = 'red', 'green', 'blue'",
          chosen: false,
          correct: false },
        { option: 'var colors = ["red", "green", "blue"]',
          chosen: false,
          correct: true }
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
