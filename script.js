
// OPEN WEBSITE

function openWebsite() {
    document.getElementById("opening").classList.add("hidden");
    document.getElementById("main-content").classList.remove("hidden");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    startFloatingHearts();
}


// SURPRISE POPUP

function showSurprise() {
    document.getElementById("surprise-popup").classList.remove("hidden");
}

function closeSurprise() {
    document.getElementById("surprise-popup").classList.add("hidden");
}


// QUIZ DATA

const questions = [
    {
        question: "Apa yang paling aku suka dari kamu?",
        answers: [
            "Senyum kamu",
            "Cara kamu ngobrol",
            "Semua tentang kamu",
            "Semuanya benar"
        ],
        correct: 3,
        message: "Hehe, semuanya memang aku suka! 💙"
    },
    {
        question: "Kalau aku lagi sedih, aku paling butuh apa?",
        answers: [
            "Ditemenin",
            "Dikasih makanan",
            "Tidur seharian",
            "Semua boleh"
        ],
        correct: 3,
        message: "Yang penting ada kamu di samping aku! 🧸"
    },
    {
        question: "Warna apa yang jadi tema website ini?",
        answers: [
            "Pink dan putih",
            "Baby blue dan navy",
            "Hitam dan merah",
            "Ungu dan kuning"
        ],
        correct: 1,
        message: "Yap! Baby blue and navy! 💙"
    },
    {
        question: "Seberapa sayang aku sama kamu?",
        answers: [
            "Sedikit",
            "Lumayan",
            "Banyak banget",
            "Nggak bisa dihitung"
        ],
        correct: 3,
        message: "Nah, ini baru jawaban yang benar! 💗"
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;


// SHOW QUESTION

function showQuestion() {
    answered = false;

    const question = questions[currentQuestion];

    document.getElementById("question-number").textContent =
        `Question ${currentQuestion + 1} of ${questions.length}`;

    document.getElementById("question").textContent =
        question.question;

    document.getElementById("quiz-result").textContent = "";

    document.getElementById("next-button").classList.add("hidden");

    const answerButtons = document.getElementById("answer-buttons");

    answerButtons.innerHTML = "";

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");

        button.textContent = answer;
        button.className = "answer-btn";

        button.addEventListener("click", () => {
            checkAnswer(index, button);
        });

        answerButtons.appendChild(button);
    });
}


// CHECK ANSWER

function checkAnswer(selected, selectedButton) {
    if (answered) return;

    answered = true;

    const question = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");
    const result = document.getElementById("quiz-result");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.correct) {
            button.classList.add("correct");
        }
    });

    if (selected === question.correct) {
        score++;
        result.textContent = "Correct! " + question.message;
        result.style.color = "#36885b";
    } else {
        selectedButton.classList.add("wrong");
        result.textContent = "Hehe, belum tepat! " + question.message;
        result.style.color = "#bd6a6a";
    }

    const nextButton = document.getElementById("next-button");

    if (currentQuestion === questions.length - 1) {
        nextButton.textContent = "See My Message ♡";
    } else {
        nextButton.textContent = "Next Question →";
    }

    nextButton.classList.remove("hidden");
}


// NEXT QUESTION

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showFinalScore();
    }
}


// FINAL QUIZ RESULT

function showFinalScore() {
    document.getElementById("question-number").textContent =
        "QUIZ COMPLETED 💙";

    document.getElementById("question").textContent =
        "Yay! Kamu udah menyelesaikan kuisnya!";

    document.getElementById("answer-buttons").innerHTML = "";

    document.getElementById("quiz-result").textContent =
        `Kamu berhasil menjawab ${score} dari ${questions.length} pertanyaan. Tapi yang paling penting, kamu tetap jadi favorit aku! ♡`;

    document.getElementById("next-button").classList.add("hidden");
}


// FLOATING HEART ANIMATION

function startFloatingHearts() {
    setInterval(() => {
        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.textContent = ["♡", "♥", "💙"][Math.floor(Math.random() * 3)];

        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (15 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 700);
}


// START QUIZ

showQuestion();
