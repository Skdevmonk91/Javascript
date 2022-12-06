//Javascript Strict Mode
/* It will check syntax are proper and goes by rules of javascript if there are any syntax error it can be show with(use strict) */

// 1. simple way to implement
"use strict";
// a = 10; //wrong way to implement
var a = 15; //Right way to implement
console.log(a);

//wrong way to implement
// function test() {
//     b = 20;
// }





/* It can be implement between of functions to check if they have right way of syntax or not because it will check syntax after defined it(and only applicable for specific function or used that function in time implementation) */
//Right way to implement
function test() {
    "use strict";
    var b = 20;
}

//Wrong way to implement
// function test() {
//     b = 20;
// }





/* It can also applicable in many type of syntax or defining values  */
//Wrong way to implement
// function test2(c, d, d) {

//     console.log(c + d + d);

// }

//Right way to implement
function test2(c, d, e) {

    console.log(c + d + e);

}


test2(20, 30, 30);