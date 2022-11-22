//Basic array to show the output 
let arr = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50];
console.log(arr);



//All loops in JavaScript
//for loop
/* In for loop check with basic pre-decide condition and i element 
for outcome and condition */
/* runs in a condition of for loop until it came with equal no and condition become false */
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}



//for each loop
/*In this loop with help of element and function we can simply 
pre-define this condition for each time usually execute itself 
all inside of '()' after declaring id/array with for loop*/
let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
arr2.forEach(function (element) {
    console.log(element)
})



//while loop
/*In while loop we can define first character to compare with whole array(k=0) 
after than we can add condition to check each time and at last with (k++)
to give checking condition on specific number with addition*/
let arr3 = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
k = 0;
while (k < arr3.length) {
    console.log(arr3[k]);
    k++;
}



//do while loop
/*Difference between while and do while loop is even condition is true
it check one time check in do condition before execute numbers/any type 
and the complete the loop checking until last number become equal or more */
let arr4 = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
l = 0;
do {
    console.log(arr4[l]);
    l++
}
while (l < arr4.length);