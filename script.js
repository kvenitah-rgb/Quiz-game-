This is the JavaScript code 
const questions = [
  {
    question: "What is 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: "4"
  },
  {
    question: "Capital of France?",
    answers: ["London", "Berlin", "Paris", "Madrid"],
    correct: "Paris"
  },
  {
    question: "What color is the sky?",
    answers: ["Green", "Blue", "Red", "Yellow"],
    correct: "Blue"
  },
  {
    question: "HTML stands for?",
    answers: ["Hyper Tech Markup Language", "High Text Machine Language", "HyperText Markup Language", "None"],
    correct: "HyperText Markup Language"
  }
];

let shuffledQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;

const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultDisplay = document.getElementById('result');
[12/29, 6:08 AM] Chatgpt: const timerDisplay = document.getElementById('timer');

function startQuiz() {
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  score = 0;
  resultDisplay.textContent = '';
  nextButton.style.display = 'none';
  startTimer();
  showQuestion();
}

function startTimer() {
  timeLeft = 30;
  timerDisplay.textContent = Time: timeLeft;
  timer = setInterval(() => 
    timeLeft–;
    timerDisplay.textContent = Time:{timeLeft};
    if (timeLeft <= 0) {
      clearInterval(timer);
      showResult("Time's up!");
    }
  }, 1000);
}

function showQuestion() {
  resetState();
  const question = shuffledQuestions[currentQuestionIndex];
  questionContainer.textContent = question.question;

  question.answers.forEach(answer => {
    const li = document.createElement('li');
    li.textContent = answer;
    li.addEventListener('click', () => selectAnswer(li, question.correct));
    answerButtons.appendChild(li);
  });
}

function resetState() {
  nextButton.style.display = 'none';
  answerButtons.innerHTML = '';
}

function selectAnswer(selected, correctAnswer) {
  const options = answerButtons.children;
  Array.from(options).forEach(option => {
    option.classList.remove('correct', 'wrong');
    if (option.textContent === correctAnswer) {
[12/29, 6:08 AM] Chatgpt: option.classList.add('correct');
    } else {
      option.classList.add('wrong');
    }
    option.style.pointerEvents = 'none';
  });

  if (selected.textContent === correctAnswer) {
    score++;
  }

  clearInterval(timer);
  nextButton.style.display = 'inline';
}

nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    startTimer();
    showQuestion();
  } else {
    showFinalResult();
  }
});

function showResult(message) {
  questionContainer.textContent = '';
  answerButtons.innerHTML = '';
  nextButton.style.display = 'none';
  resultDisplay.textContent = message + ` Your Score: score/{questions.length}`;
}

function showFinalResult() {
  showResult("Quiz Completed!");
}

startQuiz();
```
