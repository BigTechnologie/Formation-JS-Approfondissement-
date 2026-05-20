//1- SELECTION PAR "id"
var html = document.getElementById("html") // console.log(html.textContent); 
// var css = document.getElementById("css"); // css.style.background = "blue"

// 2- SELECTION PAR CLASSE
var section = document.getElementsByClassName('section'); // section[0].getElementsByClassName('article')[0]

// 3- SELECTION PAR "name"
var input = document.getElementsByTagName('input');
// var input2 = document.getElementsByTagName('input')[1]; // input2.style.color = "red"

// 4- SELECTIONNER UN OU PLUSIEURS ELEMENTS
//SELECTIONNER UN ELEMENT
var css = document.querySelector("#css"); // console.log(css)
// let section2 = document.querySelector(".section"); // console.log(section2)

// SELECTION DE PLUSIEURS ELEMENTS
let sections = document.querySelectorAll("section");
// let MesSections = document.querySelectorAll("section")[2]; // console.log(MesSections);

// 5- SELECTIONNER ENCORE PLUS
var formLine = document.querySelector('.form-line'); // formLine.querySelector('label').htmlFor

// 6- SELCTIONNER UNE CLASS PUIS MODIFIER SA VALEUR
var article = document.querySelectorAll('.article')[0];
// à la console : article.innerHTML; 
/*
article.innerHTML = "<h3> Voici mon nouveau Titre </h3>";
article.innerHTML;
article.innerHTML = "Bonjour Dawan";
article.innerHTML;
*/
//article.style.backgroundColor = "green";

/*
article.style.backgroundColor = "green";
article.style.color = "white";
article.style.fontSize = "2.1rem";
article.style.border = "2px solid red"

*/

// DEFINITION 
//Explication
//article.innerHTML; //Permet de recuperer le contenu de l'article à l'indice [0]. // Si non : article.textContent; // Si non : article.innerText;
//✅ 1- innerHTML Sert à : Lire ou modifier le HTML interne. ✅ 2- textContent : Sert à : Récupérer uniquement le texte. ✅ 3- innerText : Sert à : Lire le texte visible à l’écran.






