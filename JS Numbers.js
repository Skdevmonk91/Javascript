//Integer Precision Number Method
let a = 999999999999999;
let b = 9999999999999999;


//Floating Precision Number Method
let c = 0.2 + 0.1;


//Adding Strings And Number Method
let d = (0.2 * 10 + 0.1 * 10) / 10;


//Numeric String Number Method
let e = 10;
let f = "20";
let g = e + f;



//NaN-Not An Number Method
let h = "750";
let i = "25";
let j = h / i;


//Hexadecimal String Number Method
let k = 0xFF;


//Number As Object Number Method
// x is a number
let l = 12;
// y is a Number object
let m = new Number(12);


//For output using an simple method for all the method and arguments
document.getElementById("ex1").innerHTML = a + "<br>" + b;
document.getElementById("ex2").innerHTML = "0.2 + 0.1 = " + c;
document.getElementById("ex3").innerHTML = "0.2 + 0.1 = " + d;
document.getElementById("ex4").innerHTML = g;
document.getElementById("ex5").innerHTML = j;
document.getElementById("ex6").innerHTML = 100 / "Apple";
document.getElementById("ex7").innerHTML = "0xFF = " + k;
document.getElementById("ex8").innerHTML = typeof l + "<br>" + typeof m;