let score = 0;
let questionNumber = 0;

function Question(question, answers, correct) {
  this.question = question;
  this.answers = answers;
  this.correct = correct;
}

Question.prototype.showQuestion = function() {
  document.querySelector(".question > p ").textContent =
    "Q-" + questionNumber + 1 + " .";
  document.querySelector(".question").textContent = this.question;
  let list = document.querySelector(".answer-list");
  for (let i = 0; i < this.answers.length; i++) {
    let ans = document.createElement("LI");
    let radioInput = document.createElement("INPUT");
    let radioLabel = document.createElement("LABEL");
    radioLabel.innerText = this.answers[i];
    radioInput.setAttribute("id", "answer" + 1);
    radioInput.setAttribute("type", "radio");
    radioInput.setAttribute("name", "answer");
    radioInput.setAttribute("for", "answer" + 1);
    ans.appendChild(radioInput);
    ans.appendChild(radioLabel);
    list.appendChild(ans);
  }
};

const question1 = new Question(
  "2 + 2 is equal to ?",
  ["0", "1", "2", "4"],
  "4"
);
const question2 = new Question(
  "3 * 2 is equal to ?",
  ["0", "6", "2", "4"],
  "4"
);
const question3 = new Question(
  " 16 / 4 is equal to ?",
  ["4", "1", "2", "6"],
  "4"
);
const question4 = new Question(
  " 8 - 2 is equal to ?",
  ["0", "1", "6", "4"],
  "4"
);

let questions = [question1, question2, question3, question4];
// function randomQuestion() {
//   let selectedQuestion = Math.floor(Math.random() * questions.length);
//   return selectedQuestion;
//   //return questions.splice(selectedQuestion, 1);
// }

function displayQuestion() {
  console.log(questions);
  let random = Math.floor(Math.random() * questions.length);
  questions[random].showQuestion();
  questions.splice(random, 1);
}

displayQuestion();
