//JS Debugging 
/* JavaScript debugging is used for bugs inside a code to debugging using different methods like (console.log) and (Debugging tools from browsers) */



function onClick() {
    if (inputsAreEmpty()) {
        label.textContent = 'Error: one or both inputs are empty.';
        return;
    }
    updateLabel();
}

function inputsAreEmpty() {
    if (getNumber1() === '' || getNumber2() === '') {
        return true;
    } else {
        return false;
    }
}

function updateLabel() {
    var addend1 = getNumber1();
    var addend2 = getNumber2();
    /* There was a bug that make addition of two numbers and give output to numbers as string (ex) */
    // var sum = addend1 + addend2; //bug(12 + 13 = 1213 )
    var sum = parseInt(addend1) + parseInt(addend2); //Fixed bug (10 + 5 = 15)
    label.textContent = addend1 + ' + ' + addend2 + ' = ' + sum;
}

function getNumber1() {
    return inputs[0].value;
}

function getNumber2() {
    return inputs[1].value;
}

var inputs = document.querySelectorAll('input');
var label = document.querySelector('p');
var button = document.querySelector('button');
button.addEventListener('click', onClick);