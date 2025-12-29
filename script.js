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
  },
  {
    question: "What does CSS stand for?",
    answers: [
      { text: "Central Style Sheets", correct: false },
      { text: "Cascading Style Sheets", correct: true },
      { text: "Cascading Simple Sheets", correct: false },
      { text: "Cars SUVs Sailboats", correct: false }
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
  nextButton.style.display = 'none';
  result.innerText = '';
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  // Shuffle answers for each question
  const shuffledAnswers = currentQuestion.answers.sort(() => Math.random() - 0.5);

  shuffledAnswers.forEach(answer => {
    const button = document.createElement('li');
    button.innerText = answer.text;
    button.classList.add('answer-btn');
    if (answer.correct) {
      button.dataset.correct = "true";
    }
    button.addEventListener('click', selectAnswer);
    answerButtons.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  endBtn.onclick = () => location.reload();
  result.appendChild(endBtn);
}
result.innerText = '';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    score++;
    result.innerText = "Correct!";
  } else {
    result.innerText = "Wrong!";
  }

  // Set colors
  Array.from(answerButtons.children).forEach(button => {
    if (button.dataset.correct === "true") {
      button.classList.add('correct');
    } else {
      button.classList.add('wrong');
    }
    // Disable all buttons after an answer is chosen
    button.removeEventListener('click', selectAnswer);
  });

  nextButton.style.display = 'inline-block';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
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
  `;

  const endBtn = document.createElement('button');
  endBtn.id = 'end-btn';
  endBtn.innerText = "End Quiz";

// Initialize quiz on page load
startQuiz();
