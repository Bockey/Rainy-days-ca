const form = document.querySelector("form");
const fullName = document.querySelector("#full-name");
const address = document.querySelector("#address");
const city = document.querySelector("#city");
const zipCode = document.querySelector("#zip-code");
const cardNumber = document.querySelector("#card-number");
const cardholderName = document.querySelector("#cardholder-name");
const expireDate = document.querySelector("#expire-date");
const cvv = document.querySelector("#cvv");

const fullNameError = document.querySelector(".fullNameError");
const addressError = document.querySelector(".addressError");
const cityError = document.querySelector(".cityError");
const zipCodeError = document.querySelector(".zipCodeError");
const cardNumberError = document.querySelector(".cardNumberError");
const cardholderNameError = document.querySelector(".cardholderNameError");
const expireDateError = document.querySelector(".expireDateError");
const cvvError = document.querySelector(".cvvError");

const btn = document.querySelector("#finish-button");
const message = document.querySelector(".message");

fullName.addEventListener("input", greenBorder);
address.addEventListener("input", greenBorder);
city.addEventListener("input", greenBorder);
zipCode.addEventListener("input", greenBorder);
cardNumber.addEventListener("input", greenBorder);
cardholderName.addEventListener("input", greenBorder);
expireDate.addEventListener("input", greenBorder);
cvv.addEventListener("input", greenBorder);

fullName.addEventListener("input", errorMessages1);
address.addEventListener("input", errorMessages2);
city.addEventListener("input", errorMessages3);
zipCode.addEventListener("input", errorMessages4);
cardNumber.addEventListener("input", errorMessages5);
cardholderName.addEventListener("input", errorMessages6);
expireDate.addEventListener("input", errorMessages7);
cvv.addEventListener("input", errorMessages8);

function greenBorder() {
  if (validateInput(fullName.value, 1)) {
    fullName.style.border = "3px solid green";
  } else {
    fullName.style.border = "1px solid black";
  }
  if (validateInput(address.value, 1)) {
    address.style.border = "3px solid green";
  } else {
    address.style.border = "1px solid black";
  }
  if (validateInput(city.value, 1)) {
    city.style.border = "3px solid green";
  } else {
    city.style.border = "1px solid black";
  }
  if (validateInput(zipCode.value, 4) && nrInput(zipCode.value) === true) {
    zipCode.style.border = "3px solid green";
  } else {
    zipCode.style.border = "1px solid black";
  }
  if (
    validateInput(cardNumber.value, 16) &&
    validateCreditCard(cardNumber.value) === true
  ) {
    cardNumber.style.border = "3px solid green";
  } else {
    cardNumber.style.border = "1px solid black";
  }
  if (validateInput(cardholderName.value, 1)) {
    cardholderName.style.border = "3px solid green";
  } else {
    cardholderName.style.border = "1px solid black";
  }
  if (
    validateInput(expireDate.value, 6) &&
    validateExpireDate(expireDate.value) === true
  ) {
    expireDate.style.border = "3px solid green";
  } else {
    expireDate.style.border = "1px solid black";
  }
  if (validateInput(cvv.value, 3) && nrInput(cvv.value) === true) {
    cvv.style.border = "3px solid green";
  } else {
    cvv.style.border = "1px solid black";
  }
}

function submitForm(event) {
  event.preventDefault();
  if (
    validateInput(fullName.value, 1) === true &&
    validateInput(address.value, 1) === true &&
    validateInput(city.value, 1) === true &&
    validateInput(zipCode.value, 4) === true &&
    nrInput(zipCode.value) === true &&
    validateInput(cardNumber.value, 16) === true &&
    validateCreditCard(cardNumber.value) === true &&
    validateInput(cardholderName.value, 1) === true &&
    validateInput(expireDate.value, 6) === true &&
    validateExpireDate(expireDate.value) === true &&
    validateInput(cvv.value, 3) === true &&
    nrInput(cvv.value) === true
  ) {
    message.textContent = `Successfully purchased!`;
    message.style.color = "black";
  } else {
    message.textContent = `Please fill out all the fields.`;
    message.style.color = "red";
  }
  form.reset();
}

form.addEventListener("submit", submitForm);

function validateInput(value, len) {
  if (value.trim().length >= len) {
    return true;
  } else {
    return false;
  }
}

function nrInput(value) {
  if (isNaN(value) === false) {
    return true;
  } else {
    return false;
  }
}

function errorMessages1() {
  if (validateInput(fullName.value, 1) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }
}
function errorMessages2() {
  if (validateInput(address.value, 1) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }
}
function errorMessages3() {
  if (validateInput(city.value, 1) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
}
function errorMessages4() {
  if (
    validateInput(zipCode.value, 4) === true &&
    nrInput(zipCode.value) === true
  ) {
    zipCodeError.style.display = "none";
  } else {
    zipCodeError.style.display = "block";
  }
}
function errorMessages5() {
  if (
    validateInput(cardNumber.value, 16) === true &&
    validateCreditCard(cardNumber.value) === true
  ) {
    cardNumberError.style.display = "none";
  } else {
    cardNumberError.style.display = "block";
  }
}
function errorMessages6() {
  if (validateInput(cardholderName.value, 1) === true) {
    cardholderNameError.style.display = "none";
  } else {
    cardholderNameError.style.display = "block";
  }
}
function errorMessages7() {
  if (
    validateInput(expireDate.value, 6) === true &&
    validateExpireDate(expireDate.value) === true
  ) {
    expireDateError.style.display = "none";
  } else {
    expireDateError.style.display = "block";
  }
}
function errorMessages8() {
  if (validateInput(cvv.value, 3) === true && nrInput(cvv.value) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }
}

function validateExpireDate(date) {
  const regEx = /([12]\d{3}-(0[1-9]|1[0-2]))/;
  const patternMatches = regEx.test(date);
  return patternMatches;
}

function validateCreditCard(cardNr) {
  const regEx = /[0-9]{12}(?:[0-9]{3})?$/;
  const patternMatches = regEx.test(cardNr);

  return patternMatches;
}
