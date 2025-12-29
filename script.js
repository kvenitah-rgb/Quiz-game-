const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  },
  {
    question: "Which language runs in a web browser?",
    answers: [
      { text: "Java", correct: false },
      { text: "C", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true }
    ]
  }
];

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const result = document.getElementById("result");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  result.innerHTML = "";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  const questionElement = document.createElement("h2");
  questionElement.innerText = currentQuestion.question;
  questionContainer.innerHTML = "";
  questionContainer.appendChild(questionElement);

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("li");
    button.innerText = answer.text;
    button.classList.add("answer-btn");
    button.addEventListener("click", () => selectAnswer(button, answer.correct));
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
  // Remove this line to keep the score visible:
  // result.innerHTML = "";
}


function selectAnswer(button, correct) {
  if (correct) {
    score++;
    button.classList.add("correct");
  } else {
    button.classList.add("wrong");
     }
  Array.from(answerButtons.children).forEach(btn => {
    btn.removeEventListener("click", () => {});
    btn.disabled = true;
  });
  nextButton.style.display = "inline-block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionContainer.innerHTML = "";
  answerButtons.innerHTML = "";
  nextButton.style.display = "none";
  result.innerHTML = `
    <p>Thank you for participating in the quiz!</p>
    <p>Your score: score /{questions.length}</p>
    <button id="end-btn">End Quiz</button>
  `;
  document.getElementById("end-btn").addEventListener("click", () => {
    location.reload();
  });
}

startQuiz();




