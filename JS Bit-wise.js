//Javascript Bit-Wise 

//Conceptual Example For Bit-Wise In JavaScript
//1- 0000 0001 
//2- 0000 0010
//3- 0000 0011
//R- 0000 0000

//Bit-Wise AND
//bitWise AND is performed on a pair of bits, it returns 1 if both bits are 1
console.log("Bit-Wise AND: ", 1 & 2);


//Bit-Wise OR
//bitWise OR is performed on a pair of bits, it returns 1 if one of the bits is 1
console.log("Bit-Wise OR: ", 1 | 2);




//Real-Time Example For Bit-Wise In JavaScript

var readPermission = 2; //Creating permission values to read 
var writePermission = 5; //Creating permission values to write  
var BothPermission = 8; //Creating permission values for both


//creating new variable to give permission
let myPermission = 0;
//Building statement for executing permission value
myPermission = myPermission | readPermission | writePermission;
//For outcome
console.log("Current Permission Value: ", myPermission);




//Permission checking through condition(ternary) operator
let permit = (myPermission & writePermission) ? 'yes' : 'no';
//for outcome
console.log("Conditional permission applicable: ", permit);