//JavaScript function events


//onclick event
/* onclick event used to handle click events or when you click on button or anything
it will give specific output that we pre-define */
//creating a function named clickable
//on click function after click on button it will show the output in console log format
function clickable() {
    console.log('Button was just pressed');
}



//onload function
/* onload event use as when load a website,page or document it will show with 
specific pre-define work */
window.onload = function () {
    console.log('Window has been just refreshed');
}



//click function
/* we are using click function of event listener for a pre-define work will 
be called when it is clicked */
ex1.addEventListener('click', function () {
    console.log('We have just touch the division');
})



//mouseover function
/* mouseover of event listener for a pre-define work will be executed when
a hover on specific div or anything */
ex2.addEventListener('mouseover', function () {
    console.log('only hover on through mouse');
})



//mouseout function
/* mouseout of event listener for a pre-define work will be execute when
a mouse out of div or anything it will be called  */
ex2.addEventListener('mouseout', function () {
    console.log('we are outside of an container');
})



//mouseup function
/* mouseup of event listener for a pre-define work will be execute when
a mouse click of div or anything it will be called  */
ex2.addEventListener('mouseup', function () {
    console.log('Newly Mouse click event just fired');
})



//mousedown function
/* mouseout of event listener for a pre-define work will be execute when
a mouse unclick of div or anything it will be called  */
ex2.addEventListener('mousedown', function () {
    console.log('Mouse lost the fired through mousedown event');
})



//click function
/* This function will be called and change of a text of original text */
ex1.addEventListener('click', function () {
    document.querySelectorAll('.container')[0].innerHTML = '<b><u><i>press the button and the words used for change text.</b></u></i>';
    console.log('Text change through click event');
})



//create and use multiple time of new variable
let oldHTML = document.querySelectorAll('.container')[0].innerHTML;

/* This will be used to building a text change from the original text using 
this functions */
ex2.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[0].innerHTML = oldHTML;
    console.log('Mouse Up event fired and stand to new state');
})


/* This will be used to building a text change again back to original text
using the function called */
ex2.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[0].innerHTML = '<b><u><i>For some reason we have to change to the new text that we have stored in the event.</b></u></i>';
    console.log('Mousedown fired through event listener back to normal state');
})