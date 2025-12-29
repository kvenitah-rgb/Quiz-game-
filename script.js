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

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const selectedBtn = e.target;
  const correct = selectedBtn.dataset.correct === "true";

  if (correct) score++;

  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct === "true");
    button.disabled = true;
  });

  if (currentQuestionIndex === shuffledQuestions.length - 1) {
    nextButton.innerText = "Finish";
    nextButton.onclick = showResult;
  } else {
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
  questionContainer.innerHTML = '';
  answerButtons.innerHTML = '';
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


