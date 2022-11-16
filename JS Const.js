// Create an Array:
const cars = ["Russia", "Japan", "Ukraine"];

// Change an element:
cars[0] = "India";

// Add an element:
cars.push("Singapore");

// Display the Array:
document.getElementById("ex1").innerHTML = cars;



// Create an object:
const sport = { type: "Fiat", model: "500", color: "white" };

// Change a property:
sport.color = "red";

// Add a property:
sport.player = "Neeraj Chopra";

// Display the property:
document.getElementById("ex2").innerHTML = "Javelin  Throw Is On" + " " + sport.player;



const a = 100;
// Here a is 100

{
    const a = 50;
    // Here a is 50
}

// Here a is 100
document.getElementById("Block").innerHTML = "a is " + a;



//Redeclare the const
const k = 5;       // Allowed

{
    const k = 10;   // Allowed
}

{
    const k = 15;   // Allowed
}



equipName = "Football";
document.getElementById("ex5").innerHTML = equipName;
var equipName;