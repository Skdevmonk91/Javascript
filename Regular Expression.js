//Regular Expression
/* Regular Expression(regExp) are used to search 
or replace text and can be useful in complicated text too */

//Sample used text to check regular expression of all example ideas
var sample = "New text is initialized in long formatted paragraph of linear text "



//Initializing a regular expression
var reg1 = /text/;


//Checking if regular expression is set or not in outcome
console.log("First initialized regular expression: ", reg1);


//Checking original text used in regular expression
console.log("Original text of regExp: ", reg1.source);





//1. exec: it will check the index no of text that first occurred from search of regExp 
let output = reg1.exec(sample);

//To check outcome of regular expression
console.log(output);



//Creating new regular expression and making it global using (g) 
var reg2 = /text/g

//To search inside sample text for first time used word's index and give outcome 
let result = reg2.exec(sample);
console.log(result);

//To search inside sample text for second time used word's index and give outcome 
result = reg2.exec(sample);
console.log(result);

//To search inside sample text for third time used word's index and give outcome 
/* Because there are only two time used word(text) and there are no
available data to print third time it will print null as outcome */
result = reg2.exec(sample);
console.log(result);



//To check text or data with case insensitive use (i)
var reg3 = /text/i

//Sample text
example = "New kind of TexT will be print on page that is full of tEXt";

//To search text 
output = reg3.exec(example);

//For outcome
console.log(output);



//To search what of input text we have given using(variable name.input)
console.log("Given Input: ", output.input);

//To search what of index text we have given using(variable name.index)
console.log("Given Index: ", output.index);