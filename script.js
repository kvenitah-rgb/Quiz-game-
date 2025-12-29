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

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const result = document.getElementById('result');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  result.innerHTML = '';
  nextButton.style.display = 'none';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement('li');
    button.innerText = answer.text;
    button.classList.add('answer-btn');
    if(answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
   answerButtons.innerHTML = '';
  result.innerHTML = '';
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if(correct) {
    score++;
    selectedBtn.classList.add('correct');
    result.innerText = "Correct!";
  } else { selectedBtn.classList.add('wrong');
    result.innerText = "Wrong!";
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true") {
      button.classList.add('correct');
    }
    button.removeEventListener('click', selectAnswer);
  });

  nextButton.style.display = 'block';
}

nextButton.addEventListener('click', () => {currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  questionContainer.innerText = '';
  answerButtons.innerHTML = '';
  nextButton.style.display = 'none';
  result.innerHTML = `
    <p>Thank you for participating in the quiz!</p>
    <p>Your score: score /{questions.length}</p>
    <button id="end-btn">End Quiz</button>
  `;

  document.getElementById('end-btn').addEventListener('click', () => {
    location.reload();
  });
}
// Start quiz on load
startQuiz();




