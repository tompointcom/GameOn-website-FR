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


function verifyInput(input) {
  if (input.value === "") {
    throw new Error(`Le champ ${input.id} est vide`)
  }

  if (input.length < 2) {
    throw new Error(`Le champ ${input.id} est trop court`)
  }
}

function verifyEmail(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    throw new Error("L'email n'est pas valide.")
  }
}

function verifyBirthDate(birthDate) {
  if (birthDate.value === "") {
    throw new Error("Veuillez saisir une date de naissance");
  }
}

function verifyParticipationQuantity(participationQuantity) {
  const numbers = /^[0-9]+$/;
  if (!participationQuantity.value.match(numbers)) {
    throw new Error("Veuillez saisir un nombre")
  }

  if (participationQuantity.value === "") {
    throw Error
  }

}


function locationRadioValue(locationRadio) {
  let radioSelected = false;
  for (let i = 0; i < locationRadio.length; i++) {
    if (locationRadio[i].checked) {
      radioSelected = true;
      console.log(locationRadio[i].value);
      break;
    }
  }

  if (!radioSelected) {
    throw new Error("Veuillez sélectionner une ville");
  }
}

function checkBoxChecked(checkBox) {
  if (!checkBox.checked) {
    throw new Error("Veuillez accepter les termes et conditions")
  }
}






form.addEventListener("submit", (event) => {
  try {
    event.preventDefault()

    verifyInput(firstName)

    verifyInput(lastName)

    verifyEmail(email)

    verifyBirthDate(birthDate)

    verifyParticipationQuantity(participationQuantity)

    locationRadioValue(locationRadio)
    
    checkBoxChecked(checkBox)
    
  }
  catch (error) {
    console.log("Une erreur est survenue : " + error.message)
  }
})



