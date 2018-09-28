
const quiz1 = new Quiz({
  title: 'My test quiz',
  subject: 'JS',
  user: '',
  questions: [
    {
      number: 1,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 2,
      text: 'What is functional programming?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 3,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 4,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    }
    {
      number: 5,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    }
    {
      number: 6,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    }
    {
      number: 7,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 8,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 9,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    },
    {
      number: 10,
      text: 'Select two programming paradigms important for JavaScript app developers?',
      choices: [
        { text: 'Prototypal inheritance (also: prototypes, OLOO).', chosen: false, correct: false },
        { text: 'Object-Oriented Programming', chosen: false, correct: true },
        { text: '101', chosen: false, correct: false }
      ]
    }
  ]
})

console.log(quiz1)
console.log(quiz1.questions.map(question => <Question question={question} />)


// const Question = props =>
//   <div>
//     <h1>{props.question.text}</h1>
//     {
//       props.question.choices.map(choice => <Choice choice={choice} />)
//     }
//   </div>

// const Choice = props =>
//     <button>{props.choice.text}</button>


