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




/* 2. test()-If there regular expression is present it will return true and if 
 doesn't match it will return false */
/* To use this function first take a exec/any variable than dot(.)test inside
bracket that sample string var and output in created variable
(ex: exam = ex1.test(sample))(out(main variable),reg1(regExp Initialize),test(main func)
,sample(string used for regExp)) */
let out = reg1.test(sample);
//For outcome
console.log("Is Regular Expression Available: ", out);




// 3. match()- it will return an array of results or null 
//It have different and complex syntax than other regular expression syntax
//If we define regExp in global we can get multiple output of array in match()
let express = sample.match(reg1);
//for outcome purpose
console.log("Index of first match() is: ", express);




/* 4.search()- it will return the index of first searched element or if it's
not available then prints value (-1) */
//It also have different and complex syntax than other regular expression syntax
let express2 = sample.search(reg1);
//for output
console.log("Index of first Search() is: ", express2);




// 5.replace()- it will replace string with all the match 
/* if there are defined globally it will replace with all match and if it
is not global than only first match will be replaced */
let express3 = sample.replace(reg1, "Stake");
//for output
console.log("Replace of matched string is: ", express3);