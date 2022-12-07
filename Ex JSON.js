// JS JSON
// JSON used for converting all code into javascript and support only text code


// created new variable named json1 for JSON values
/* passing different types like string,number,boolean,null,array,object and inside a object new array with nested object */
json1 = `{
    "name": "JACK",
  
    "scores": 95.3,
  
    "scholar": false,
  
    "scholarship": null,
  
    "kitItem": ["Bat", "Protective gloves", "ball", "leg guard"],
  
    "newObj": {
      "name": "Nest Object",
      "volume": "First",
      "bookList": ["red-circle", "precise history", { "event": "lost" }]
    }
  }`;

//Checking whole json1
console.log(json1);



//creating a new object for parse json object into javascript
parseItem = JSON.parse(json1);
//for outcome of changing
console.log(parseItem);



//parse json simple item i have stored
// parseItem['scholar'];

//parse json simple array and accessing values
// parseItem['kitItem'][3]

//parse json simple object and inside that object accessing array inside object
// parseItem['newObj']['bookList'][2]

/* parse json simple object and inside that object accessing array inside object and even accessing inside that object */
// parseItem['newObj']['bookList']['2']['event']