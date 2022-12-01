//Basic date function
let divas = new Date();
document.write("<h3><b>Basic Date Function Demo:</b></h3><br>");
document.write(divas + "<br><br><br>");


//Changing a hour using setHour function
divas.setHours(23);
document.write("<h3><b>1.New Change Of Hours:</b></h3><br>");
document.write(divas + "<br><br><br><br>");


//Changing a minutes using setMinutes function
divas.setMinutes(59);
document.write("<h3><b>2.New Change Of Minutes:</b></h3><br>");
document.write(divas + "<br><br><br><br>");


//Changing a seconds using setSeconds function
divas.setSeconds(00);
document.write("<h3><b>3.New Change Of Seconds:</b></h3><br>");
document.write(divas + "<br><br><br><br>");


//Changing a date using setDate function
divas.setDate(29);
document.write("<h3><b>4.New Change Of Date:</b></h3><br>");
document.write(divas + "<br><br><br><br>");


//Changing a month using setMonth function
divas.setMonth(11);
document.write("<h3><b>5.New Change Of Month:</b></h3><br>");
document.write(divas + "<br><br><br><br>");


//Changing a full year using setFullYear function
divas.setFullYear(2021);
document.write("<h3><b>6.New Change Of Year:</b></h3><br>");
document.write(divas + "<br><br><br><br>");