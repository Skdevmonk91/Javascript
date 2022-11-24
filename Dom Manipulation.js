//Dom Manipulation Methods Live Demonstration


//1.getElementById In Dom Manipulation
//Returns a value by targeting specified value of the ID attribute
//basic style of a button using default id method in dom manipulation
document.getElementById('click').style.border = '2px solid blue';
/* fetching and targeting to display specific code using a given id by user 
through this function */
let cost = document.getElementById('click');
console.log(cost);



//2.getElementByClassName In Dom Manipulation
//Assigning and returning a value by targeting specified value in Class attribute
/* The difference between class and id is it can only used once everytime in time 
of need you have create unique id to style or anything but in case of class it
can be used multiple in assigning them also when it comes to targeting it 
have same functionality */
let colclass = document.getElementsByClassName("container");
console.log(colclass);
/* It is also possible to target a single variable and make changes in class that
we have assigned */
// colclass[0].style.background = "aliceblue";
/* we can target a created class for css/etc.. through variable is can be possible 
(classlist.add) if we made that class or it exist it will apply work and even if 
does not exist that class it will still add that class but without any effect */
colclass[0].classList.add("color");
colclass[1].classList.add("design");



//you can de-assign or remove property through property(classList.remove)
colclass[1].classList.remove("design");



//to check or target inside html of class
// colclass[1].innerHTML;  
console.log(colclass[0].innerHTML);



//to check or target text of an html
// colclass[1].innertext; 
console.log(colclass[0].innerText);



/* to the target all same types(button,classes,id,etc..) at same time check
all of bunch it can be check with "getElementsByTagName" in dom manipulation */
let b = document.getElementsByTagName('div');
console.log(b);



//appendChild In Dom Manipulation
//creating a new element for example
let precise = document.createElement('u');
precise.innerText = 'FOR A FORMATION IT IS A NEW TEXT.';
/* To make changes or add/import new element/class in program it can be made with 
appendChild after initialize with new element with existing one */
colclass[0].appendChild(precise);



//creating a new element for example
let precise2 = document.createElement('b');
precise2.innerText = 'WORKING ON SUBTLE INITIALIZE OF PRE-TEXT FORMAT.';
/* If we want to replace from new added class with created class it can 
be done by class(replaceChild) in dom manipulation */
colclass[0].replaceChild(precise2, precise);
/* If we want remove class from added class of child we can do that with
class(removeChild) in dom manipulation */
colclass[0].removeChild(precise2);
colclass[0].appendChild(precise); //re-adding appendChild class



//to check the title of an document in dom manipulation
let k = document.title;
console.log(k);


//to check url of document in dom manipulation
let l = document.URL;
console.log(l);


//to check available scripts of document in dom manipulation
let m = document.scripts;
console.log(m);


//to check available links of document in dom manipulation
let n = document.links;
console.log(n);


//to check available images of document in dom manipulation
let o = document.images;
console.log(o);


//to check currently using domain for document presentation in dom manipulation
let p = document.domain;
console.log(p);



//most useful for cascading stylesheet(css)
//querySelector will return only single element in dom manipulation
select = document.querySelector('.container');
console.log(select);

//querySelectorAll will return whole list of elements in dom manipulation
select = document.querySelectorAll('.container');
console.log(select);