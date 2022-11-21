//Comparisons Function For Voting On Spacial Occasion
function myFunc() {
    let voteable;
    let age = Number(document.getElementById("age").value);
    if (isNaN(age)) {
        voteable = "Input is not a number";
    } else {
        voteable = (age < 18) ? "Too young" : "Old enough";
    }
    document.getElementById("ex1").innerHTML = voteable + " to vote";
}



//The ?? operator returns the first argument if it is null or undefined. Otherwise it returns the second
let nest = null;
let text = "missing";
let result = nest ?? text;
document.getElementById("ex2").innerHTML = "Provide Work Is " + result;



//The ?. operator returns undefined if an object is undefined or null instead of throwing an error
const war = { type: "morse", model: "1.5", color: "red" };
let rest = war?.rest;
document.getElementById("ex3").innerHTML = rest;
