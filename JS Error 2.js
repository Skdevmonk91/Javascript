//JS Errors
/* Try- it will create code to test for errors while being executed  */
/* Catch- this type of code will be execute when there are any error comes up in try statement */
/* Finally- it will execute code after try and catch being executed without any checking those results with final statement of result get output by finally contained code  */
/* Throw- it allows us to create custom error */

//Try,Catch And Finally Basic Example
try {
    console.log("Try statement runs");

    precise;

    console.log("End of try statement execution");
}

catch (err) {

    console.log("Error has occurred: ", err);
}

finally {
    console.log("Always runs");
}

console.log("Continue execution of code...");



//Parse Time Error
//this will occur when there is a mistake in code syntax
// try {
//     {
//         console.log("Try statement runs");

//         precise;

//         console.log("End of try statement execution");
//     } 




//Throw 
let JSON = '{"Age": 20}';

try {

    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError("Incomplete Data: No Name");
    }

    console.log(user.name);

}

catch (e) {
    console.log("JSON Error: ", e.message);
}