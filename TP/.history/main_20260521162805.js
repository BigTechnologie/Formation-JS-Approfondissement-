// Sélection des éléments du DOM
const form = document.querySelector("#form_inscription");
const errorMessage = document.querySelectorAll(".error-message");
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
    
}