// 1. Create a list of questions & answers in a 2D-array
const quiz = [
  [ "Which month does Christmas occur in?", "december" ],
  [ "What is 20 + 45?", "65" ],
  [ "What Shakespeare play is this quote from? 'To be, or not to be, that is the question.' ", "hamlet"]
]

let correctAnswer = []
let wrongAnswer = []

function print(message) {
  document.write(message);
}

// 2. Add a loop to cycle through the array, ask and compare the users response to the answers in the array.
for(let i = 0; i < quiz.length; i++) {
  // 3. Prompt the user to answer the questions.
  let answer = prompt(quiz[i][0])
  // 4. Use a conditional statement to compare users response to the correct answers.
  if( answer.toLowerCase() === quiz[i][1]) {
    correctAnswer.push(quiz[i][0])
  } else {
    wrongAnswer.push(quiz[i][0])
  }
}

// 5. Print the number of correct & incorrect answers to the page
function results() {
  let html = `<p>You got ${correctAnswer.length} questions right!</p>`

  if( wrongAnswer.length > 0 ) {
    html = `<p>You got ${wrongAnswer.length} questions wrong.</p>`
    return html
  } else {
    return html
  }
}

results()
