//Input Validation Example
function myFunc() {
    const message = document.getElementById("p1");
    message.innerHTML = "";
    let a = document.getElementById("ex1").value;
    try {
        if (a == "") throw "empty";
        if (isNaN(a)) throw "not a number";
        a = Number(a);
        if (a < 5) throw "too low";
        if (a > 10) throw "too high";
    }
    catch (err) {
        message.innerHTML = "Input is " + err;
    }
}


//Finally Statement
function myFunction() {
    const message = document.getElementById("p2");
    message.innerHTML = "";
    let b = document.getElementById("ex2").value;
    try {
        if (b == "") throw "is empty";
        if (isNaN(b)) throw "is not a number";
        b = Number(b);
        if (b > 100) throw "is too high";
        if (b < 1) throw "is too low";
    }
    catch (err) {
        message.innerHTML = "Input " + err;
    }
    finally {
        document.getElementById("ex2").value = "";
    }
}


//Range Error
let num = 1;
try {
    num.toPrecision(500);
}
catch (err) {
    document.getElementById("ex3").innerHTML = err.name;
}


//Reference Error
let c = 5;
try {
    c = d + 1;
}
catch (err) {
    document.getElementById("ex4").innerHTML = err.name;
}


//Syntax Error
try {
    eval("alert('Hello)");
}
catch (err) {
    document.getElementById("ex5").innerHTML = err.name;
}


//Type Error
let number = 1;
try {
    number.toUpperCase();
}
catch (err) {
    document.getElementById("ex6").innerHTML = err.name;
}


//URI(Uniform Resource Editor) Error
try {
    decodeURI("%%%");
}
catch (err) {
    document.getElementById("ex7").innerHTML = err.name;
}