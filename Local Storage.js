/*Local storage is used to storage some data on local domain and easily available 
on every computer*/


/* It can't be used in saving sensitive data because it is not secure and anyone 
can see it */


//Also can't be used in storing in too much data it have limited space



//To create and save new data in local storage using set item 
localStorage.setItem('example', 'ex1');



//To check what data is stored in local storage
localStorage



//To retrieve or check single data in local storage
localStorage.getItem('example');



//To remove single data from local storage
localStorage.removeItem('example');



//To delete or clear all data from local storage
localStorage.clear();