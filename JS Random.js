//Live Example Of Demonstrating Math Random Function
document.getElementById("ex1").innerHTML = Math.random();



//Live example of demonstrating math random integer

//random integer between 0 and 10 
document.getElementById("ex2").innerHTML =
    Math.floor(Math.random() * 11);

//random integer between 1 and 100 
document.getElementById("ex3").innerHTML =
    Math.floor(Math.random() * 100) + 1;



//A proper random function in 0 to 10
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}