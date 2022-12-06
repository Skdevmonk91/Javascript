//Javascript Hoisting
//It can be declared but can't be initialized
//With help of hoisting you can use variable first and declare later
//It will trash(non-useable) in class and function expressions initialization
//doesn't support const and let type but with var it can be done 

// => Output of variable will be undefined
// => Because can't be used because it just support declaration and value cant access
console.log(a);



//-> we can use var before declaration
greet()

//-> original declaration and initialized function 
function greet() {
    console.log("New Javascript Welcome");
}



// => Variable declaring and initializing
var a = 7;

//In case of let you have to initialize first without it will throw an error
// let a = 7;

//Same goes for const it will also throw an error
// const a = 7;


// => After initialization output
console.log(a);