//JavaScript Module
//It uses to store multiple code to single file and used by other files
/* More stable method,makes code more reusability,never need to take whole code and can only export needed part of code(function,class,object,array,etc...)  */




/* You can export class individual by methods at starting word exports or you can do the same with simpler method too */

// => First Method to export individual data from one to another code
// export let arr1 = [45, "contract", null, 87, "Road"]; //creating new array


var str1 = "Welcome to module inside a string representation"; //creating new string


let obj1 = { //creating new object
    "name": "Nest Object",
    "volume": "First",
    "bookList": ["red-circle", "precise history", { "event": "lost" }]
}


function message() { //creating function message to make alert
    alert("You have Successfully Created Module");
}


function preMessage(name) { //creating function in second way to assign value
    console.log(`Welcome to module code MR ${name}`)
}


function precaution(name) { //creating function in second way to assign value/message
    return `Please start your coding port ${name}`;
}


class text {  //class called
    collision() { //constructor called
        console.log("Newly Created Constructor Called Inside Of Class");
    }
}




// =>Second method to make export of methods,classes,functions or any code 
export { str1, obj1, text, preMessage, precaution, message };



//Default method is code/method of file that can called as default code for file
// export default function () {
//     console.log("exported default function in JavaScript World");
// }