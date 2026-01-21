import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
function generarNuevaExcusa() {
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

    // Cálculo aleatorio
    let iWho = Math.floor(Math.random() * who.length);
    let iAction = Math.floor(Math.random() * action.length);
    let iWhat = Math.floor(Math.random() * what.length);
    let iWhen = Math.floor(Math.random() * when.length);

    let finalExcuse = who[iWho] + " " + action[iAction] + " " + what[iWhat] + " " + when[iWhen];

    
    document.getElementById("excuse").innerHTML = finalExcuse;
}


window.onload = function() {
    generarNuevaExcusa();

    document.getElementById("btn-generar").addEventListener("click", generarNuevaExcusa);
};
