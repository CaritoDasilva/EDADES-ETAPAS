window.onload = function () { 
/*Aquí voy a declarar todas las variables generales que voy a utilizar en el ejercicio*/

let age = prompt("¿Cuál es tu edad?");
let todlerTxt = document.getElementById("todler");
let preschoolerTxt = document.getElementById("preschooler");
let schoolerTxt = document.getElementById("schooler");
let teenagerTxt = document.getElementById("teenager");
let youngAdultTxt = document.getElementById("youngAdult");
let adultTxt = document.getElementById("adult");
let errorTxt = document.getElementById("error");
/*Aquí vamos a poner los IF/ELSE del ejercicio*/
if (age >0) {  
if (age >= 1 && age <=3) {
    todlerTxt.innerHTML = "<h1>La persona que está ingresando es <strong>TODLER</strong></h1>";
}
if (age >=4 && age <=5) {
    preschoolerTxt.innerHTML = "<h1>La persona que está ingresando es <strong>PRESCHOOLER</strong></h1>";
}
if (age >=6 && age <= 12) {
    schoolerTxt.innerHTML = "<h1>La persona que está ingresando es <strong>SCHOOLER</strong></h1>";
}
if (age >=13 && age<=19) {
    teenagerTxt.innerHTML = "<h1>La persona que está ingresando es <strong>TEENAGER</strong></h1>";
}
if (age >=20 && age<= 25) {
    youngAdultTxt.innerHTML = "<h1>La persona que está ingresando es <strong>YOUNG ADULT</strong></h1>";
}
if (age >25) {
    adultTxt.innerHTML = "<h1>La persona que está ingresando es <strong>ADULT</strong></h1>";
}
} else {
    errorTxt.innerHTML = "<h1>Sólo puede ingresar números sin decimales</h1>";
}
}
