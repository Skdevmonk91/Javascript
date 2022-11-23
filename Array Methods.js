//Different type of array methods 


//length function for check the length of basic array that we have defined
let arr1 = ['Key', 3, 58, "King", 25, null, 'Revenue', false];
console.log(arr1.length);



//Array Pop Method
//it deletes the last element of the given array 
arr1.pop("");
console.log(arr1);



//Array Push Method
//it can add new elements to an array values in the last  
arr1.push("Rose", true);
console.log(arr1);



//Array Shift Method
//Removes the first element from an array and returns it
arr1.shift();
console.log(arr1);



//Array Unshift Method
//Inserts new elements at the start of an array, and returns the new length of the array.
arr1.unshift("Lock", 65);
console.log(arr1);



//Array 'tostring' Method
//Returns a string representation of an array
arr1.toString();



//Array Sort Method
//Sorts an array in place
//sort an array from checking first no like 1 to 10 and then give final result
let arr2 = [16, 62, 88, 23, 56, 78];
arr2.sort();
console.log(arr2);