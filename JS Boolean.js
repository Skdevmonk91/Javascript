// Boolean value of 0 (zero) is false
let a = 0;


//Boolean value of "" (empty string) is false
let b = "";


//Boolean value of undefined is false
let c;


//Boolean value of null is false
let d = null;


//Boolean value of false is false
let e = false;


//Boolean value of NaN is false
let f = 10 / "Hello";


//The == operator,t and u are equal
let t = false;         // t is a boolean
let u = new Boolean(false);  // u is an object


//v === w true or false?
const v = new Boolean(false);
const w = new Boolean(false);




//Boolean Everything Without a "Value" is False And(To Show The Output)
document.getElementById("ex1").innerHTML = Boolean(a);
document.getElementById("ex2").innerHTML = Boolean("");
document.getElementById("ex3").innerHTML = Boolean(c);
document.getElementById("ex4").innerHTML = Boolean(d);
document.getElementById("ex5").innerHTML = Boolean(e);
document.getElementById("ex6").innerHTML = Boolean(f);



//JavaScript Booleans as Objects(To show the output)
/*Booleans have primitive values created with literals also be defined as objects with the keyword(To show the output)*/
document.getElementById("dt1").innerHTML = typeof i + "<br>" + typeof o;
//The == operator, x and y are equal(To show the output)
document.getElementById("dt2").innerHTML = (t == u);
//x === y true or false?(To show the output)
document.getElementById("dt3").innerHTML = (v === w);


//Boolean in everything with a "value" is true(To show The Output)
document.getElementById("eg1").innerHTML =
    "125 is " + Boolean(125) + "<br>" +
    "22/7 is " + Boolean(22 / 7) + "<br>" +
    "-159 is " + Boolean(-159) + "<br>" +
    "Not empty string is " + Boolean("Hello") + "<br>" +
    "Even the string 'false' is " + Boolean('false') + "<br>" +
    "Except zero is " + Boolean(9 + 15 + 22 / 7);