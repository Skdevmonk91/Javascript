//JavaScript Arrow Function
//Arrow functions use to write shorter function syntax



//Creating/Defining a regular function with values
let play = function () {
    console.log("You have just called an function");
}

//Basic Arrow Function Method Calling Syntax And Values
let work = () => {
    console.log("You have just called a function with help of arrow functions");
}


//Calling for outcome of simple function
play();

//Calling for outcome of simple arrow function
work();




//Creating function that returns a simple string
let help = function () {
    return "A great return for function";
}

//for outcome of simple function string
console.log(help());


//we can pass string for return value can be done with arrow function
//singleLine/oneLine code doesn't require braces & return 

/* we can define a value and return for singleLine/oneLiner code in arrow function with this method(This is way we can use but we have one more simple way) */
let subject = () => { return "Great return for function in arrow" };

/* In simpler way we can can define string or any value without using return and it will be still return that value(without any braces & return ) */
let stand = () => "Great return for function in arrow simpler way";

//singleLine string calling in arrow function
console.log(subject());
//single line string calling in arrow function using simpler way
console.log(stand());




//Passing Object Using Arrow Function
let red = () => { name: "Lost" }; //wrong way to use arrow function in object
let green = () => ({ name: "Lotus" }); //Right way to use arrow function in object

//This wont work(undefined will be output)
console.log(red());
//This will provide an outcome
console.log(green());


//Single parentheses don't require "()"
let one = news => "This is " + news;
//But multiple parentheses require "()"
let two = (news, stock) => "This is " + news + stock;

//single parentheses output
console.log(one("a javascript program"));
//multiple parentheses output
console.log(two("a javascript program ", "and you have performed good work."));