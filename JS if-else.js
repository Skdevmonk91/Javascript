//Single if-else used for comparing two conditions like this one
var age = 5;

if (age > 21) {
    console.log("You are applicable for marriage")
}
else {
    console.log('You are not applicable for marriage');
}



/*if-else ladder used to compare between multiple 
conditions and print the final output*/
var legal = 11;

if (legal > 21) {
    console.log("You have in adult age");
}

else if (legal > 15) {
    console.log("You are in school days");
}

else if (legal > 45) {
    console.log("You are in middle-age");
}

else if (legal > 60) {
    console.log("You are in older age");
}

else {
    console.log("You are just an primary school kid");
}
console.log('A decided outcome has come up, just check it');