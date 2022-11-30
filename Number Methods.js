//Converting a string into a number 
//initializing string
let a = "90";

//Converting into a number
let check = Number(a);

//Output
console.log("String to number outcome: ", check - 20);


//Converting boolean into number
//initializing string
//If it is true it will print 1 and if it is not than false
let b = false;

//Converting into a number
let check2 = Number(b);

//Output
console.log("Boolean to number outcome: ", check2);




//Converting String into parseInt
//initializing string
/* It will return first integer value without decimal point and even
    with multiple value it will only return first value(does not support 
    values like 010 output will be still 10 and if a string first letter
    is not a number a character/word it will return (not an number)) */
let c = "56.98";

//Converting into a number
let check3 = parseInt(c);

//Output
console.log("String/Number to parse integer outcome: ", check3);


//initializing string
/* It will return first integer & float value without decimal point and even
    with multiple value it will only return first value(does not support 
    values like 010 output will be still 10 and if a string first letter
    is not a number a character/word it will return (not an number)) */
//difference between float and int parse is it an return value after point(.)
let d = "65.35";

//Converting into a number
let check4 = parseFloat(d);

//Output
console.log("float/number to parse float outcome: ", check4);




//Checking number/string is isFinite/isInteger or not
//initializing number
//If it is number inside finite than true other it will false
let e = -350;

//Checking the given input
let check5 = Number.isFinite(e);

//Output
console.log("checking the final outcome: ", check5);


//initializing number
//If it is number than true other it will false
let f = 'Reveal';

//Checking the given input
let check6 = Number.isInteger(f);

//Output
console.log("checking the final outcome: ", check6);




//toFixed number method
//Initializing number
//It returns a string, with the number written with a specified number of decimals
let g = 58.4789;

//Checking the given input
let check7 = g.toFixed(3);

//Output
console.log("checking the final outcome: ", check7);


//toPrecision number method
//Initializing number
let h = 95.3642;

//Checking the given input
let check8 = h.toPrecision(8);

//Output
console.log("checking the final outcome: ", check8);