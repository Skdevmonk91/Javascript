//Javascript Sets
//It is used to store unique values(cant repeat or store same value)
//Can be useful to store multiple type of values



//Initializing a blank set
let newSet = new Set();
console.log(newSet);



//Creating and adding new values for a set
//first method to store values in set
newSet.add("this");
newSet.add("that");
newSet.add("that");
newSet.add("a new statement");
newSet.add("that2");
newSet.add(15);
newSet.add(true);
newSet.add(false);
console.log("Old Set Outcome: ", newSet);



//other way to define set and use it
let newSet2 = new Set([1, "know", "that", "that", "those", { a: 2, b: 67 }]);
console.log("New Set Outcome: ", newSet2);



//To check the size of set(for set 1)
console.log(newSet.size);



//To check a specific word/object/etc.. available or not we can do that too
//if it is available it will print true if it is not than false
console.log(newSet.has("that2"));



//we can also a element delete in set using delete method
console.log("Before Removal From Set: ", newSet.has("that2"));
newSet.delete("that2"); //to remove element from set
console.log("After Removal From Set: ", newSet.has("that2"));




//Iterating a set
//Using for of method
for (let item of newSet) {
    console.log("Iterated items using for of: ", item);
}

//Using for each method
newSet2.forEach(item => {
    console.log("iterated items using forEach: ", item);
});