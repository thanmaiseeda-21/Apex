// --- Quiz Logic ---
const quizData = [
  {
    question: "What is JavaScript primarily used for?",
    options: ["Styling webpages", "Adding interactivity", "Database management", "Server hosting"],
    answer: "Adding interactivity"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const q = quizData[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      if (opt === q.answer) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    document.getElementById("quiz").innerHTML = "<p>You completed the quiz!</p>";
  }
}

loadQuestion();

// --- Joke API Logic ---
function getJoke() {
  fetch("https://icanhazdadjoke.com/", {
    headers: { Accept: "application/json" }
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("joke").innerText = data.joke;
    })
    .catch(err => {
      document.getElementById("joke").innerText = "Failed to fetch a joke.";
    });
}
