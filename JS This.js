//Javascript This
//this keyword refers to an object

//"use strict"; //it will make global this to undefined

function sum() { //Initializing new function
    var min = 190 - 35; //Global variable for minus(sum number)
    console.log("Minus value output is ", min); //For outcome
    console.log(this); //Refer as global object(In function)
}

sum(); //calling function




const data = { //Initializing new object
    name: "JAKE", //Creating new string
    qualification: "PH.D", //second string 
    sum: function () { //again in function
        var mul = 21 * 158; //Internal statement 
        console.log("Minus value output is ", mul); //For outcome
        console.log(this); //Refer to current object(It has behavior change in object)
    }
}

data.sum(); //calling object and variable that we have created