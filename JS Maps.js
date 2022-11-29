//Javascript Maps
//It can  be used for any type of key and value


//Object for Map
let newMap = new Map();


//Key for Map(using new object)
let key1 = 'mapString', key2 = {}, key3 = function () { };


//Values for Map(using new object)
newMap.set(key1, 'this is a local string');
newMap.set(key2, 'new created object but on blank');
newMap.set(key3, 'function but with an empty value');


//To check the basic output
console.log(newMap);




//Getting  values from map
let val1 = newMap.get(key1);
let val2 = newMap.get(key2);
let val3 = newMap.get(key3);


//To check the values
console.log(val1, val2, val3);


//To check the size of map
console.log(newMap.size);




//We can get values and key also can get outcome with for...of loop
for (let [key, values] of newMap) {
    console.log(key, values);
}


//To only find the Keys in for...of loop
for (let key of newMap.keys()) {
    console.log('All Key Is:', key);
}


//To only find the Values in for...of loop
for (let values of newMap.values()) {
    console.log('All Value Is:', values);
}




//We can get values and key also can get outcome with for each loop
newMap.forEach((value, key) => {
    console.log('key is: ', key);
    console.log('value is: ', value);
})




//Converting map to an array
let myArray = Array.from(newMap);
console.log('Map to an array is:', myArray);


//Converting map key to an array
let myKeyArray = Array.from(newMap.keys());
console.log('Map to key array is:', myKeyArray);


//Converting map value to an array
let myValueArray = Array.from(newMap.values());
console.log('Map to value array is:', myValueArray);