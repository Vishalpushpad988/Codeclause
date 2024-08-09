// script.js

// Array of quiz questions
const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correctAnswer: 2 // Paris
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: 1 // Mars
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: 3 // Pacific Ocean
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    // Get the current question
    const currentQuestion = quizQuestions[currentQuestionIndex];

    // Display the question
    document.getElementById('question').textContent = currentQuestion.question;

    // Display the options
    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.textContent = currentQuestion.options[index];
        option.onclick = () => checkAnswer(index);
    });
}

function checkAnswer(selectedIndex) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        alert("Correct!");
    } else {
        alert("Wrong answer.");
    }

    // Move to the next question or end the quiz
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
        loadQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('quiz-container').innerHTML = `
        <h2>Your score: ${score} out of ${quizQuestions.length}</h2>
        <button onclick="restartQuiz()">Restart Quiz</button>
    `;
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    loadQuestion();
}

// Load the first question when the page loads
document.addEventListener('DOMContentLoaded', loadQuestion);
