//Javascript Errors


//New Variable Define
let a = "NEW PRECISE MESSAGE";

a = undefined; //it wont show error if we undefined it first

//If statement
//it will run first
if (a != undefined) {
    throw new Error("This is not undefined");
}

//else statement
//it will run when any error occurs in if statement
else {
    console.log("This is undefined");
}




//try statement
//it will run first
try {
    console.log("I am inside of try block statement");

    functionRed();
}

//catch statement
//this statement will be executed when any error occurs in try block
catch (error) {

    //Simply print whole error message
    console.log(error);

    //this error message will occurs first if any error runs in try block
    console.log("You haven't Updated it right");

    //To check type/name of error
    console.log("Error type is: ", error.name);

    //To check error message
    console.log("Error message is: ", error.message);

}




//finally statement
//it will run once in the code at the end in any condition
finally {
    console.log("You have done all updating");
}