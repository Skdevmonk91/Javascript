//Basic string to show
let string1 = "A quite Pronounce is hard to regret";
document.write(string1);



//String length
/* for the string it is also possible to measure the 
length of a string using length */
console.log(string1.length);



//String Indexof
// Returns the position of the defined specific word of a substring from beginning 
/* does not work even if you had that word used multiple time in string'
only check it once from start and return that specific word */
console.log(string1.indexOf('Pronounce'));



//String LastIndexof
// Returns the position of the defined specific word of a substring from end 
/* does not work even if you had that word used multiple time in string'
only check it once from end and return that specific word */
console.log(string1.lastIndexOf('hard'));



//String Slice Method
//Give Output of beginning of the specified portion of string word/object
console.log(string1.slice(8, 25));



//String Replace Method
//Replaces text of string in specified word or portion throughout string
/* Also same rule applicable like 'indexof' check the string from start 
and only affect one word or line at once even if it is used multiple 
time in string and paragraph */
console.log(string1.replace("quite", "right"));