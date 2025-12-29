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
  result.innerHTML = "";
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();

  const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const li = document.createElement("li");
    li.innerText = answer.text;
    li.classList.add("btn");
    if (answer.correct) {
      li.dataset.correct = answer.correct;
    }
    li.addEventListener("click", selectAnswer);
    answerButtons.appendChild(li);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
  result.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(btn => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextButton.style.display = "block";
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
  resetState();
  questionContainer.innerText = "";
  result.innerHTML = `
    <p>Thank you for participating in the quiz!</p>
    questionContainer.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const li = document.createElement("li");
    li.innerText = answer.text;
    li.classList.add("btn");
    if (answer.correct) {
      li.dataset.correct = answer.correct;
    }
    li.addEventListener("click", selectAnswer);
    answerButtons.appendChild(li);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.innerHTML = "";
  result.innerHTML = "";
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("wrong");
  }

  Array.from(answerButtons.children).forEach(btn => {
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
    btn.disabled = true;
  });

  nextButton.style.display = "block";
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
  resetState();
  questionContainer.innerText = "";
  result.innerHTML = `
    <p>Thank you for participating in the quiz!</p>
    <p>Your score: score /{questions.length}</p>
  `;

  const endBtn = document.createElement('button');
  endBtn.textContent = "End Quiz";
  endBtn.id = "end-btn";
  endBtn.style.marginTop = "15px";
  endBtn.style.padding = "10px 20px";
  endBtn.style.backgroundColor = "maroon";
  endBtn.style.color = "#fff";
  endBtn.style.border = "none";
  endBtn.style.borderRadius = "5px";
  endBtn.style.cursor = "pointer";
  endBtn.onclick = () => location.reload();
  result.appendChild(endBtn);
}

startQuiz();
