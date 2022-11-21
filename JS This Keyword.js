// Create an object:
const person = {
    firstName: "Mihir",
    lastName: "Tyagi",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("ex1").innerHTML = person.fullName();



// Create an object:
const per = {
    firstName: "William",
    lastName: "Jones",
    id: 5310,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.getElementById("ex2").innerHTML = per.fullName();



let a = this;
document.getElementById("ex3").innerHTML = a;



"use strict";
document.getElementById("ex4").innerHTML = myFunction();

function myFunction() {
    return this;
}



// Create an object:
const man = {
    firstName: "Walter",
    lastName: "Mosh",
    id: 4120,
    Function: function () {
        return this;
    }
};

// Display data from the object:
document.getElementById("ex5").innerHTML = man.Function();


const Hand1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const Hand2 = {
    firstName: "Harris",
    lastName: "Ford",
}

let f = Hand1.fullName.call(Hand2);
document.getElementById("ex6").innerHTML = f;



const press = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const rest = {
    firstName: "Mihir",
    lastName: "Tyagi",
}

let fullName = press.fullName.bind(rest);

document.getElementById("ex7").innerHTML = fullName();