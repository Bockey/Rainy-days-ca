const signUpBtn = document.querySelector(".sign-button");
const container = document.querySelector(".sign-button-div");
const form = document.querySelector("form");
const password = document.querySelector("#password");

const email = document.querySelector("#email");
const emailError = document.querySelector(".emailError");
const passwordError = document.querySelector(".passwordError");

const formMessage = document.querySelector(".formMessage");

function validateInput(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

email.addEventListener("input", function () {
  if (validateEmail(email.value)) {
    email.style.border = "2px solid #005438";
    emailError.style.display = "none";
  } else {
    email.style.border = "1px solid #DFDDDD";
    emailError.style.display = "flex";
    emailError.style.maxWidth = "none";
  }
});
password.addEventListener("input", function () {
  if (validateInput(password.value, 8)) {
    password.style.border = "2px solid #005438";
    passwordError.style.display = "none";
  } else {
    password.style.border = "1px solid #DFDDDD";
    passwordError.style.display = "flex";
    passwordError.style.maxWidth = "none";
  }
});

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}

function submitForm(event) {
  event.preventDefault();
  if (validateEmail(email.value) & validateInput(password.value, 8)) {
    signUpBtn.style.backgroundColor = "#FFF";
    signUpBtn.style.cursor = "default";
    signUpBtn.textContent = "SUCCESS";
    formMessage.textContent = "You are now signed in.";
    formMessage.style.color = "#005438";
    signUpBtn.disabled = "true";
  } else {
    formMessage.textContent = "Please fill out all the fields.";
    formMessage.style.color = "red";
  }
  // clear all input values
  form.reset();
}

signUpBtn.addEventListener("click", submitForm);
