//JS Class
//It is uses to create class

class redForm { //initializing class and constructor 
    //submit object 
    submit() {
        alert(this.name + " form is successfully submitted " + "You are eligible for train " + this.railname)
    }

    //cancel object
    cancel() {
        alert(this.name + " There is an problem with form " + "You are not eligible for train " + this.railname)
    }

    //fill form object
    fill(addname, railname) {
        this.name = addname
        this.railname = railname
    }
}


/* Creating new object for player1 and making fill with upper objects for details and
reservation success or failures */
let player1 = new redForm;
player1.fill("Jake", "Saurashtra Express");
/* Creating new object for player2 and making fill with upper objects for details and
reservation success or failures */
let player2 = new redForm;
player2.fill("Jade", "Rajdhani Express");
/* Creating new object for player3 and making fill with upper objects for details and
reservation success or failures */
let player3 = new redForm;
player3.fill("Joy", "Bandra Local");


//to check submitted data
player1.submit();
player2.submit();
player3.cancel();