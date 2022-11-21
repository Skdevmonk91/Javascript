//Variables declared within a JavaScript function, become LOCAL to the function
myFunc();

function myFunc() {
    let Gives = "Reserve";
    document.getElementById("ex1").innerHTML = typeof Gives + " " + Gives;
}

document.getElementById("ex2").innerHTML = typeof Gives;



//A variable declared outside a function, becomes GLOBAL
let Work = "Host";
Function();

function Function() {
    document.getElementById("ex3").innerHTML = "We Have Announced " + Work;
}



//Global variables can be accessed from anywhere in a JavaScript program
Function2();
// code here can use carName as a global variable
document.getElementById("ex4").innerHTML = "We did work with " + global;

function Function2() {
    global = "genetics";
}



//Global variables defined with the var keyword belong to the window object
let word = "Rest";

// code here can not use window.carName
document.getElementById("ex5").innerHTML = "You Need To Take " + window.word;