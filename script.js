document.addEventListener("DOMContentLoaded", () => {
    const quizData = [
        { question: "What is 2 + 2?", options: ["3", "4", "5", "6"], answer: "4" },
        { question: "Capital of France?", options: ["Berlin", "Paris", "Rome", "Madrid"], answer: "Paris" },
        { question: "Who wrote 'Hamlet'?", options: ["Tolkien", "Shakespeare", "Hemingway", "Dickens"], answer: "Shakespeare" }
    ];

    let currentQuestion = 0;
    let score = 0;
    let answers = [];
    let shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);

    function loadQuestion() {
        const q = shuffledQuestions[currentQuestion];
        document.getElementById('question').innerText = q.question;
        const optionsDiv = document.getElementById('options');
        optionsDiv.innerHTML = '';
        q.options.forEach(option => {
            const btn = document.createElement('button');
            btn.innerText = option;
            btn.onclick = () => checkAnswer(option, q.answer);
            optionsDiv.appendChild(btn);
        });
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('end-btn').style.display = 'inline-block';
    }

    function checkAnswer(selected, correct) {
        answers.push({
            question: shuffledQuestions[currentQuestion].question,
            selected,
            correct,
            isCorrect: selected === correct
        });
        if (selected === correct) {
            score++;
            document.getElementById('result').innerText = "Correct!";
        } else {
            document.getElementById('result').innerText = Wrong! Answer: ${correct};
        }
        document.getElementById('next-btn').style.display = 'inline-block';
        document.getElementById('end-btn').style.display = 'none';
    }

    document.getElementById('next-btn').onclick = () => {
        currentQuestion++;
        if (currentQuestion < shuffledQuestions.length) {
            loadQuestion();
            document.getElementById('result').innerText = '';
        } else {
            showSummary();
        }
    };

    document.getElementById('end-btn').onclick = () => {
        showSummary();
    };

    function showSummary() {
        document.getElementById('question').innerText = Quiz Over! Score: ${score}/${quizData.length};
        document.getElementById('options').innerHTML = '';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('end-btn').style.display = 'none';
        document.getElementById('result').innerHTML = <p>Thanks for taking the quiz!</p><button onclick="location.reload()">Restart</button>;
        let summary = '<h3>Answers:</h3>';
        answers.forEach((a, i) => {
            summary += `<p>Q${i+1}: ${a.question} - ${a.isCorrect ? '✅ Correct' : ❌ Wrong (${a.selected}, Ans: ${a.correct})}</p>`;
        });
        document.getElementById('summary').innerHTML = summary;
    }

    loadQuestion();
});
