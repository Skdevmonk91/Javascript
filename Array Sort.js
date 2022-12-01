//Different Array Sort Methods

//Basic string in array and its output
let a = ['Roy', 'Mihir', 'Ford', 'Tata'];
console.log("Before Sort: ", a);
//basic sort method and output
a.sort();
console.log("After Sort: ", a);



//New string in array and its output
let b = ['Jack', 'Mortal', 'Arvind', 'Ola'];
console.log("Before Sort: ", b);

//Reverse Sort Method and Output
b.reverse();
console.log("After Sort Reverse: ", b);



//Numeric reverse sort method and output
let c = [40, 100, 1, 5, 25, 10];
console.log("Before Sort In Numeric: ", c);
c.sort(function (a, b) { return b - a });
console.log("After Sort Reverse In Numeric : ", c);



//Random sort method and output
let d = [40, 100, 10, 35, 250, 120];
console.log("Before Sort Before Randomly: ", c);
function myFunction() {
    d.sort(function () { return 0.5 - Math.random() });
    console.log("After Sort With Randomly : ", d);
}



//Lowest number and output
let e = [5, 100, 51, 65, 84, 109];
document.getElementById("ex1").innerHTML = e;
c.sort(function (u, v) { return v - u });
document.getElementById("ex3").innerHTML = e[0];



//Highest number and output
let f = [48, 100, 120, 59, 125, 210];
document.getElementById("ex2").innerHTML = f;
f.sort(function (x, y) { return x - y });
document.getElementById("ex4").innerHTML = f[5];