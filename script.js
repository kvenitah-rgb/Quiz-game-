
const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Paris", correct: true },
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Madrid", correct: false }
    ]
  {
    question: "which country is the Pearl of Africa?",
        answers: [
      { text: "london", correct: false },
      { text: "Berlin", correct: false },
      { text: "Tanzania", correct: false },
      { text: "Uganda", correct: true }
    ]
  }
];
  {
    question: "What color is the sky?",
    answers: [
      { text: "green", correct: false },
      { text: "pink", correct: false },
      { text: "yellow", correct: false },
      { text: "blue", correct: true }
    ]
  }
];
  {
    question: "HTML stands for?",
    answers: [
      {text:"Hyper Tech Markup Language",correct: false},
      {text:"High Text Machine Language",correct: false},
      {text:"HyperText Markup Language",correct: true}
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
const resultDisplay = document.getElementById("result");
let shuffled Questions =[];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  shuffledQuestion = question.sort(()=>math.random()-0.5);
  currentQuestionIndex = 0;
  score = 0;
  nextButton.style.display = "none";
  showQuestion();
}

function showQuestion() {
  resetState();
  const question=shuffledQuestions[currentQuestionIndex];
  questionContainer.textContent=question.question;

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
