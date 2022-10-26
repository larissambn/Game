const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("questions-container");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let shuffledQuestions, currentQuestionIndex;

window.addEventListener("load", startGame);

//startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});

function startGame() {
  // startButton.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function resetState() {
  clearStatusClass(document.body); // checar
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function showQuestion(question) {
  questionElement.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;

  setStatusClass(document.body, correct); // checar

  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct); //checar
  });

  //Check if out of questions
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    // buttonquiz.innerText = "Restart";
    // buttonquiz.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element); // checar
  if (correct) {
    element.classList.add("correct"); // checar
  } else {
    element.classList.add("wrong"); // checar
  }
}

function clearStatusClass(element) {
  // checar
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

const questions = [
  {
    question:
      "As lágrimas de qual animal são o único antídoto conhecido para o veneno do basilísco?",
    answers: [
      { text: "Phoenix", correct: false },
      { text: "Testrálio", correct: false },
      { text: "Hipogrifo", correct: true },
      { text: "Bicho-papão", correct: false },
    ],
  },

  {
    question: "Quem foi acusado de abrir a Câmara Secreta pela primeira vez?",
    answers: [
      { text: "Hagrid", correct: true },
      { text: "Draco Malfoy", correct: false },
      { text: "Tom Riddle", correct: false },
      { text: "Gina Weasley", correct: false },
    ],
  },

  {
    question:
      "Gilderoy Lockhart usou o feitiço errado para consertar os ossos quebrados de Harry. O que aquele feitiço realmente fez com ele?",
    answers: [
      { text: "Removeu seus ossos inteiramente", correct: false },
      { text: "Obrigou-o a falar a Língua das Cobras", correct: false },
      { text: "Removeu seus ossos inteiramente", correct: true },
    ],
  },

  {
    question: "O que é um Testrálio ?",
    answers: [
      { text: "Um duende", correct: false },
      { text: "Uma cabeça encolhida", correct: false },
      { text: "Um cavalo alado invisível", correct: true },
      { text: "Um meio-gigante", correct: false },
    ],
  },

  {
    question: "  Qual feitiço fornece proteção contra Dementadores?",
    answers: [
      { text: "Avada Kedrava", correct: false },
      { text: "Expeliarmus", correct: false },
      { text: "Expecto Patronum", correct: true },
      { text: "Crucio", correct: false },
    ],
  },

  {
    question: "Qual o talento mágico Harry compartilha com Voldemort?",
    answers: [
      { text: "Ser um Ofidioglota", correct: true },
      { text: "Ser um Animagus", correct: false },
      { text: "Ser um Comensal da Morte", correct: false },
    ],
  },
  {
    question: "Quem mata Dobby com uma adaga?",
    answers: [
      { text: "Bellatrix Lestrange", correct: true },
      { text: "Draco Malfoy", correct: false },
      { text: "Lucio Malfoy", correct: false },
      { text: "Severo Snape", correct: false },
    ],
  },
];
