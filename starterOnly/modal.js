function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
function closeModal() {
  modalbg.style.display = "none"; 
}

// close modal event
closeBtn.addEventListener("click", closeModal);

// form inputs
const form = document.getElementById("form");
const firstName = document.getElementById("first");
const lastName = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const participationQuantity = document.getElementById("quantity");
const locationRadio = document.querySelectorAll("input[name='location']");
const checkBox = document.getElementById("checkbox1");


// error message function
function setError(element, message) {
  const formData = element.closest(".formData");
  formData.setAttribute("data-error", message);
  formData.setAttribute("data-error-visible", "true");
}


// clear error message function
function clearError(element) {
  const formData = element.closest(".formData");
  formData.removeAttribute("data-error");
  formData.removeAttribute("data-error-visible");
}

// first and last name verification
function verifyInput(input) { 
  clearError(input);
  if (input.value === "") {
    setError(input, `Le champ ${input.id} est vide.`);
    return false;
  }
  if (input.value.length < 2) {
    setError(input, `Veuillez entrer 2 caractères ou plus pour le champ ${input.id}.`);
    return false;
  }
  return true;
}


// email verification
function verifyEmail(email) {
  clearError(email);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    setError(email, "L'email n'est pas valide.");
    return false;
  }
  if (email.value === "") {
    setError(email, "Veuillez saisir un email.");
    return false;
  }
  return true;
}

// birth date verification
function verifyBirthDate(birthDate) {
  clearError(birthDate);
  if (birthDate.value === "") {
    setError(birthDate, "Vous devez entrer votre date de naissance.");
    return false;
  }
}

// only accepts numbers
function verifyParticipationQuantity(participationQuantity) {
  clearError(participationQuantity);
  const numbers = /^[0-9]+$/;
  if (!participationQuantity.value.match(numbers)) {
    setError(participationQuantity, "Veuillez saisir un nombre.");
    return false;
  }
  if (participationQuantity.value === "") {
    setError(participationQuantity, "Veuillez saisir un nombre.");
    return false;
  }
  return true;
}

// checks if a radio button is checked 
function locationRadioValue(locationRadio) {
  let radioSelected = false;
  for (let i = 0; i < locationRadio.length; i++) {
    if (locationRadio[i].checked) {
      radioSelected = true;
      break;
    }
  };
  if (!radioSelected) {
    setError(locationRadio[0], "Vous devez choisir une option.");
    return false;
  }
  clearError(locationRadio[0]);
  return true;
}

function checkBoxChecked(checkBox) {
  clearError(checkBox);
  if (!checkBox.checked) {
    setError(checkBox, "Vous devez vérifier que vous acceptez les termes et conditions.");
    return false;
  }
  return true;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formIsValid = true;

  if (!verifyInput(firstName)) formIsValid = false;
  if (!verifyInput(lastName)) formIsValid = false;
  if (!verifyEmail(email)) formIsValid = false;
  if (!verifyBirthDate(birthDate)) formIsValid = false;
  if (!verifyParticipationQuantity(participationQuantity)) formIsValid = false;
  if (!locationRadioValue(locationRadio)) formIsValid = false;
  if (!checkBoxChecked(checkBox)) formIsValid = false;

  if (formIsValid) {
    form.submit();
  }
});
