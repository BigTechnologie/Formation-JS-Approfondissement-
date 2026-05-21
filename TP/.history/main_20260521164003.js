// Sélection des éléments du DOM
const form = document.querySelector("#form_inscription");
const errorMessages = document.querySelectorAll(".error-message");
const successMessage = document.getElementById("success");

// Fonctions de validation:

function validateEmail(email) {
    const regex = /\S+@\S+\.\S+/;
}
function validatePassword(password) {
    return password.length >= 8;
}

// Fonction d'affichage des erreurs
function displayErrorAndFocus(selector) {
    document.querySelector(selector).style.display = "block";
    document.querySelector(selector).focus();
}

// La Gestion de la soumission du formulaire
function handlerSubmit(event) {
    // Empecher la soumission par defaut du formulaire
    event.preventDefault();

    // Recuperation des valeurs des champs
    const nom = document.querySelector("#nom").value.trim();
    const prenom = document.querySelector("#prenom").value.trim();
    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value.trim();

    // On vide les messages d'erreurs existants
    errorMessages.forEach((message) => {
        message.style.display = "none";
    });

    // On verifie si les champs sont vides
    if(!nom) {
        displayErrorAndFocus("#nom-error");
    }
    if(!prenom) {
        displayErrorAndFocus("#prenom-error");
    }
    if(!email || !validateEmail) {
        displayErrorAndFocus("#email-error");
    }
    if(!password || !validatePassword) {
        displayErrorAndFocus("#password-error");
    }

    // Si tout est OK, envoyer le formulaire
    if(
        nom 
    ) {

    }

}