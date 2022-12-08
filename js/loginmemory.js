const input = document.querySelector(".login__input");
const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");
const quizbutton = document.querySelector("#buttonquiz");

quizbutton.addEventListener("click", () => {
  window.location = "html/quizgame.html";
});

const validateInput = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute("disabled");
    return;
  }

  button.setAttribute("disabled", "");
};

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem("player", input.value);
  window.location = "html/memorygame.html";
};

input.addEventListener("input", validateInput);
form.addEventListener("submit", handleSubmit);
