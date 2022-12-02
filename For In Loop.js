//Javascript for in loop 



//New Object Initialize
let comp1 = {
    company: "RedBurn",
    post: "Manager",
    name: "Mehul",
    Join: "Employee"
}



//For in loop to print the object and data
for (let a in comp1) {
    // console.log(a); //only print keys
    //This will give both key and value with proper format
    console.log("Office data from  " + a + " for " + comp1[a]);
}