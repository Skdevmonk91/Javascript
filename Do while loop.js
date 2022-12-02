//JavaScript Do While Loop
/* do while is variant of while loop works as same like other loop but with
different structure */
/* Difference between while and do while loop is it will execute the code 
first time and then start to check condition and loop until continues 
when condition get false */


let n = prompt("Enter your value to print: "); //Initializing a new variable
n = Number.parseInt(n); //For to convert output into integer number values

let i = 0; //let i = 1250; //creating a new variable for conditions

//executing code
do {
    console.log(i);
    i++;
}

//basic while condition
while (i < n);