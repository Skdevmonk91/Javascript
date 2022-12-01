//JavaScript Array Constant 


//Assigning a const array 
const a = [25, 50, 75, 100]

//output
console.log("Simple Const Array: ", a);



/* You cannot assign a new array list for to print with this way it is not possible
to check(it will throw an error)  */
// a = [10, 20, 30, 40];
// console.log(a);

/* But on other hand we can assign a new value individually even
if it is a const array */
a[0] = 29;
a[1] = 59;
a[2] = 69;
a[3] = 99;
console.log("Changed Value Const Array: ", a);





//Assigning a array with help of object
const b = {
    Job: "Fresher",
    Company: "Devmonk",
    Position: "Employee"
};

//Output Of Basic Object
console.log("Basic Object Const Array: ", b);



/* It also same rule apply as array in object array
(you cant change the whole object array) */
// b= {
//     Name: "Jack",
//     Company: "Microsoft",
//     Post: "Branch Manager"
// };

//But we can assign values individually in const object array
b.Job = "Experienced";
b.Company = "Apple";
b.Position = "Manager";
console.log("Basic Object Const Array After Change: ", b)