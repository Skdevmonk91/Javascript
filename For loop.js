//JS For Loop

/* let have block level element so it can be used for only same function,object whenever
you need global variable we can use var */

// 3 different statement will be executed when we start a for loop 
//Statement 1: Initialize value and name that will be executed once before loop(i=0)
//Statement 2: It will provide loop to execute until right output comes back(i<20)
/*Statement 3: This will be executed when we use loop and 
increment to check the final value will be execute(i++) */



//Basic Example
for (let i = 0; i < 20; i++) {
    console.log(i);
}


//for loop to check 1 to 25
for (let i = 0; i < 25; i++) {
    console.log(i + 1);
}

//for loop to use as sum
let sum = 0; //Initialize sum value(variable)
let n = prompt("Enter value of n:"); //for ask n through prompt
n = Number.parseInt(n); //to display only integer values
for (let i = 0; i < n; i++) { //for loop for condition
    sum += (i + 1)
    console.log(i + 1, "+"); //for check increment
}

// for final output on console
console.log("sum of first " + n + "number is  " + sum); 