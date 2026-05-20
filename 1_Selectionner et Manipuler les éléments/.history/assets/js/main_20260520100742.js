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
// let MesSections = document.querySelectorAll("section")[2];






