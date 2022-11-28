//Define Function Ways
//Long way to define a function and use in the program 
function sum1(a, b) {
    return a + b;
}

//It can also define with arrow function in more easy way 
sum2 = (x, y) => {
    return x - y;
}




//setTimeout function
//defining a simple function with message to apply
samay = () => {
    //Demo of setSetTimeout to show a pre decided text inside specific div or any output 
    document.querySelectorAll('.container')[0].innerHTML = '<u>Live demo of an set timeout function in live time</u>';
    console.log('This is a little of time');
}


//setTimeout function use delay or preset time for to show output
//first one use as function and second for miliseconds defining
clear = setTimeout(samay, 5000);




//setInterval function
//defining a simple function with message to apply
samay2 = () => {
    //Demo of setSetInterval to show a pre decided text inside specific div or any output 
    document.querySelectorAll('.container')[1].innerHTML = '<b>Live demo of an set interval function in live time</b>';
    console.log('Applying to watch it in loop');
}


/* setTimeout function use delay or preset time for to show output in loop or unlimited time */
//first one use as function and second for miliseconds defining
clear2 = setInterval(samay2, 6000);




/* to make them stop from running for first time of output it can be happend with
help of clearTimeout function */
// clearTimeout(clear);  

/* to make them stop from running of the loop of time output it can be happend
with help of clearInterval function */
// clearInterval(clear2);