//getting input elements
const cardNameInput = document.getElementById("cardNameInput");
const cardNumberInput = document.getElementById("cardNumberInput");
const monthInput = document.getElementById("monthInput");
const yearInput = document.getElementById("yearInput");
const cvcCardInput = document.getElementById("cvcCardInput");

//getting input display elements
const cardNameDisplay = document.getElementById("card-name-display");
const cardNumberDisplay = document.getElementById("card-number-display");
const monthDisplay = document.getElementById("month-display");
const yearDisplay = document.getElementById("year-display");
const cvcCardDisplay = document.getElementById("cvc-number-display");

const form = document.getElementById("form-wrapper");
const completedState = document.getElementById("completed-state");
const confirmBtn = document.getElementById("comfirm-btn");


//update the details on the card
cardNameInput.oninput = function () {
  cardNameDisplay.innerHTML = cardNameInput.value;
};
cardNumberInput.oninput = function () {
  cardNumberDisplay.innerHTML = cardNumberInput.value;
  //needs to take placeholder format
};
monthInput.oninput = function () {
  monthDisplay.innerHTML = monthInput.value;
};
yearInput.oninput = function () {
  yearDisplay.innerHTML = yearInput.value;
};
cvcCardInput.oninput = function () {
  cvcCardDisplay.innerHTML = cvcCardInput.value;
};


function formValidation() {
  //wrong format
  //cant be blank
}

function confirmForm() {
  formValidation();
  //form.style.display = "none";
  //completedState.style.display = "flex"
}