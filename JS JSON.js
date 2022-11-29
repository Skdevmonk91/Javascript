//JSON (JavaScript Object Notation)
//It is a lightweight data-interchange format. It is easy for humans to read and write.



//Initializing new object and a string for demo of json  
call = { name: "KEVAL", length: 15, b: { this: "Tho\'se" } };



//JSON.stringify
//This function used to convert the object into a string
//Creating a new object to convert for string 
ex1 = JSON.stringify(call);



//Showing the type of the output(string)
console.log(typeof ex1);



//Checking whole converted string from object
console.log(ex1);



//JSON.parse
//We can make change string to an object using JSON.parse in JSON
//To handle single quote(') we can use(\) in time of parsing complicated strings
//But if we want to handle double quotes(") we can use(\\) for outcome
person = JSON.parse(`{"name":"KEVAL","length":15,"b":{"this":"Tho\\"se"}}`);



/* From the created object checking the final outcome(is it really 
back to the original string or not?) */
console.log(person);