//New Example for class


//Creating new class for age with that can calculate
class ageLand {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }

    //Age constructor
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}


//Building syntax and output for class and ages
let ageGroup = new ageLand("Ford", 1990);
document.getElementById("ex1").innerHTML =
    "My age is " + ageGroup.age() + " years old.";