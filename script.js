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
const timerDisplay = document.getElementById("timer");

let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 30;
const shuffledQuestions = questions.sort(() => Math.random() - 0.5);

startQuiz();

function startQuiz() {
  showQuestion();
  startTimer();
}

function showQuestion() {
  resetState();
  console.log("Loading question", currentQuestionIndex);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionContainer.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const li = document.createElement("li");
    li.innerText = answer.text;
    li.addEventListener("click", () => selectAnswer(answer, li));
    answerButtons.appendChild(li);
  });

  nextButton.style.display = "none";
}

function resetState() {
  questionContainer.innerHTML = "";
  answerButtons.innerHTML = "";
  result.innerHTML = "";
}

function selectAnswer(answer, li) {
  const correct = answer.correct;
  setStatusClass(li, correct);

  if (correct) score++;
  Array.from(answerButtons.children).forEach(button => {
    button.removeEventListener("click", () => {});
    button.style.pointerEvents = "none";
  });

  if (currentQuestionIndex === shuffledQuestions.length - 1) {
    nextButton.innerText = "Finish";
    nextButton.onclick = showResult;
  } else {
    nextButton.innerText = "Next";
    nextButton.onclick = () => {
      currentQuestionIndex++;
      showQuestion();
    };
  }

  nextButton.style.display = "block";
}

function setStatusClass(element, correct) {
  element.classList.add(correct ? "correct" : "wrong");
}

function showResult() {
  clearInterval(timer);
  resetState();
  nextButton.style.display = "none";

  result.innerHTML = `
    <p>Thank you for participating in the quiz!</p>
    <p>Your score: score /{shuffledQuestions.length}</p>
  `;

  const endBtn = document.createElement('button');
  endBtn.textContent = "End Quiz";
  endBtn.style.marginTop = "15px";
  endBtn.style.padding = "10px 20px";
  endBtn.style.backgroundColor = "#800000";
  endBtn.style.color = "#fff";
  endBtn.style.border = "none";
  endBtn.style.borderRadius = "5px";
  endBtn.style.cursor = "pointer";
  endBtn.onclick = () => location.reload();
  result.appendChild(endBtn);
}

function startTimer() {
  timerDisplay.innerText = Time: timeLefts;
  timer = setInterval(() => 
    timeLeft–;
    timerDisplay.innerText = Time:{timeLeft}s;

    if (timeLeft <= 0) {
      clearInterval(timer);
      autoEndQuiz();
    }
  }, 1000);
}

function autoEndQuiz() {
  resetState();
  nextButton.style.display = "none";

  result.innerHTML = `
    <p>⏱ Time is up!</p>
    <p>Thank you for participating in the quiz!</p>
    <p>Your score: score /{shuffledQuestions.length}</p>
    <p>The page will refresh in 5 seconds...</p>
  `;

  setTimeout(() => {
    location.reload();
  }, 5000);
}


  
