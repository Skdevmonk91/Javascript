//We can create or add big integer using class bigint functionality
let a = 123456789012345678901234567890n;
let b = BigInt("123456789012345678901234567890");
document.getElementById("ex1").innerHTML = a + "<br>" + b;



//Working with typeof in bigint integer functionality
let c = BigInt("9999999999999999");
document.getElementById("ex2").innerHTML = typeof c;



//Place in with demonstration bigint multiplication example
let d = 9007199254740995n;
let e = 9007199254740995n;
let f = d * e;
document.getElementById("ex3").innerHTML = f;



//Place in with demonstration bigint division example 
let g = 8n;
let h = Number(g) / 3;
document.getElementById("ex4").innerHTML = h;



//To build the example hex,octal and binary in bigint
let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;
document.getElementById("ex5").innerHTML = hex + "<br>" + oct + "<br>" + bin;



//Demonstration of the max safe integer value
let i = Number.MAX_SAFE_INTEGER;
document.getElementById("ex6").innerHTML = i;



//Demonstrating of min safe integer value
let j = Number.MIN_SAFE_INTEGER;
document.getElementById("ex7").innerHTML = j;



/*Number.isInteger() method returns true if the argument is an integer*/
document.getElementById("ex8").innerHTML = Number.isInteger(10) + "<br>" + Number.isInteger(10.5);



/*Number.isSafeInteger() Method Returns True Or False If The Argument Is An Integer*/
document.getElementById("ex9").innerHTML = Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(1345678901234567890);