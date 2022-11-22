//Break statement
/* With specific condition in if statement and add the 
break to make loop end on specific statement
(in this one i=5 and means after 5 it will break ) */
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr1.length; i++) {
    if (i == 5) {
        break;
    }
    console.log(arr1[i]);
}

//Continue statement
/* Difference between the break and continue is 
it does not break after specific condition maybe it
will change or jump into the new statement after match
the equal condition */
// (in this number two is does not count after that number it continues)
let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (let i = 0; i < arr1.length; i++) {
    if (i == 2) {
        continue;
    }
    console.log(arr2[i]);
}
