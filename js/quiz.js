// 1. Create a list of questions & answers in a 2D-array
const quiz = [
  [ "Which month does Christmas occur in?", "december" ],
  [ "What is 20 + 45?", "65" ],
  [ "What Shakespeare play is this quote from? 'To be, or not to be, that is the question.' ", "hamlet"]
]

let correctAnswer = []
let wrongAnswer = []

let question;
let answer;
let response;
let html;

// Prints the message onto the HTML page
function print(message) {
  let outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

// Function that stores the list of answered questions in an array
function list(arr) {
  let listHTML = '<ol>'
    for (var i = 0; i < arr.length; i++) {
      listHTML += `<li> ${arr[i]} </li>`
    }
  listHTML += '</ol>'
  return listHTML
}

// 2. Add a loop to cycle through the array, ask and compare the users response to the answers in the array.
for(let i = 0; i < quiz.length; i++) {
  // 3. Prompt the user to answer the questions.
  answer = prompt(quiz[i][0])
  question = quiz[i][0]
  // 4. Use a conditional statement to compare users response to the correct answers.
  if( answer.toLowerCase() === quiz[i][1]) {
    correctAnswer.push(question)
  } else {
    wrongAnswer.push(question)
  }
}

// 5. Print the number of correct & incorrect answers to the page
function results() {
  html = `<p>You got ${correctAnswer.length} questions right and ${wrongAnswer.length} questions wrong.</p>`

  html += `<p>Questions you got correct: </p>`
  html += list(correctAnswer)

  html += `<p>Questions you got wrong:</p>`
  html += list(wrongAnswer)
  return html
}

print(results() )
