const quizData = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Rome", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Tolkien", "Shakespeare", "Hemingway", "Dickens"],
        answer: "Shakespeare"
    }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 30;
let timer;
let shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);

function loadQuestion() {
    const q = shuffledQuestions[currentQuestion];
    document.getElementById('question').innerText = q.question;
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    q.options.forEach(option => {
        const btn = document.createElement('button');
        btn.innerText = option;
        btn.onclick = checkAnswer;
        optionsDiv.appendChild(btn);
    });
    startTimer();
}

function startTimer() {
    timeLeft = 30;
    document.getElementById('time').innerText = timeLeft;
    document.getElementById('next-btn').style.display = 'none';
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            showResult("Time's up!");
        }
    }, 1000);
}

function checkAnswer(e) {
    clearInterval(timer);
    const selected = e.target.innerText;
    const correct = shuffledQuestions[currentQuestion].answer;
    if (selected === correct) {
        score++;
        showResult(`Correct!`);
    } else {
        showResult(`Wrong! Answer: ${correct}`);
    }
}

function showResult(msg) {
    document.getElementById('result').innerText = msg;
    document.getElementById('next-btn').style.display = 'inline-block';
    document.getElementById('next-btn').onclick = () => {
        currentQuestion++;
        if (currentQuestion < shuffledQuestions.length) {
            loadQuestion();
            document.getElementById('result').innerText = '';
        } else {
            document.getElementById('question').innerText = `Quiz Over! Score: ${score}/${quizData.length}`;
            document.getElementById('options').innerHTML = '';
            document.getElementById('next-btn').style.display = 'none';
        }
    };
}

loadQuestion();
