//Some of basic date functions 

//Basic date function see all current time,date,etc.. at same time  
let Date1 = new Date();
document.write(Date1);



//getSeconds method
/* if we want to check only specific seconds we can use "getSeconds" method */
let Date2 = new Date();
console.log(Date2.getSeconds());



//getMinutes method
/* if we want to check only specific minutes we can use "getMinutes" method */
let Date3 = new Date();
console.log(Date2.getMinutes());



//getHour method
/* if we want to check only specific hour we can use "getHours" method and
most of cases regular method we use 1 to 12 and again start count from 1 but
in the method after 1 to 12 it started with 13 to 24 */
let Date4 = new Date();
console.log(Date2.getHours());



//getDay method
/* if we want to check only specific day we can use "getDay" method is 
worked on principle like sunday to sunday means sunday is 0 and than
monday is 1 and tuesday is 2 and continue counting the week and
print the final output */
let Date5 = new Date();
console.log(Date2.getDay());



//getFullYear method
/* if we want to check only specific year we can use "getFullYear" method */
let Date6 = new Date();
console.log(Date2.getFullYear());
