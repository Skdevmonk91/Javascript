/* this file is used as main file and all needed classes can be import from another files to use here as main part of code and only needed classes */




//Importing all important classes from another code to this file
// import { obj1, str1, preMessage, precaution, text } from "./JS Modules(code).js";


/* aliceName Method: this method used for renaming old class or function(anything) replace with short or new name(ex: old methods as new) */
import { obj1, str1, arr1, preMessage, precaution, text, message as chat } from "./JS Between.js";


/* Even importing them is problem when we have too many functions or class and needed whole file code we can do that with help of method */
// import * as code from "./JS Modules(code).js";

// console.log(code.precaution("from here"));




chat();
preMessage("Trinity Codeport");
console.log(precaution("from here"));
var a = new text();


console.log(obj1);
console.log(str1);
console.log(arr1);


document.body.innerHTML = arr1;



/* We can call default function of javascript with help of aliceName method */
// -> First way to call this method
// import { default as redirect } from "./JS Modules(code).js"
// redirect(); //Calling method(aliceName)
// -> Second way to call this method
/* With this method you just have to import and create any named function that haven't made it will check code and if there is no function that named is present it will call automatically default function of that code */
// import Rotate from "/.JS Modules(code).js"