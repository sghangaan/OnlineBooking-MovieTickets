let n = localStorage.getItem("name");
namee = JSON.parse(n);
let e = localStorage.getItem("email");
email = JSON.parse(e);
let p = localStorage.getItem("phone");
phone = JSON.parse(p);
let a = localStorage.getItem("address");
addresss = JSON.parse(a);
var date = localStorage.getItem("date");
let time = localStorage.getItem("time");
var showTime = date + ` | ` + time ;
let title = localStorage.getItem("moviee");
let number = localStorage.getItem("b");
let c = localStorage.getItem("c");
selectedSeats = JSON.parse(c);
let univ = "University Cinema Booking";
let address1 = "College of Computer Studies Rm. 247-B,";
let address2 = "High School Annex B, New Era University";
let address = address1+' '+ address2;
let cont = 0;

window.onload = function() {
    var cinemass = "University Cinema Booking"
    var cinema = document.getElementById("cinemas")
    let address = document.getElementById("add")
    let date = document.getElementById("date")
    console.log(title);

    // You can update the content of the paragraph as needed
document.getElementById("cinemas").innerHTML = `Cinema:<span class='tabbed-text'>\t\t\t\t</span>${univ}`;
document.getElementById("add").innerHTML = `Address:<span class='tabbed-text'>\t\t\t</span>${address1} \n<span class='tabbed-text'>\t\t\t\t\t</span>${address2}`;
 
document.getElementById("date").innerHTML = `Date and Time:<span class='tabbed-text'>\t\t</span>${dateTimeString}`;
document.getElementById("name").innerHTML = `Name:<span class='tabbed-text'>\t\t\t\t</span> ${namee}`;
document.getElementById("email").innerHTML = `Email:<span class='tabbed-text'>\t\t\t\t</span> ${email}`;
document.getElementById("phone").innerHTML = `Phone Number:<span class='tabbed-text'>\t\t</span> ${phone}`;
document.getElementById("addre").innerHTML = `Address:<span class='tabbed-text'>\t\t\t</span> ${addresss}`;

document.getElementById("mov").innerHTML = `Movie:<span class='tabbed-text'>\t\t\t\t</span>${title}`;
document.getElementById("showTime").innerHTML = `Movie:<span class='tabbed-text'>\t\t\t\t</span>${showTime}`;
document.getElementById("seatNumber").innerHTML = `Seat Number:<span class='tabbed-text'>\t\t</span>${selectedSeats}`;
document.getElementById("number").innerHTML = `Number of Tickets:<span class='tabbed-text'>\t</span>${number}`;

};

function continueButton(){
        cont++;
    if (cont == 1){
        sendMail();
    }
    
    else if (cont==2){
        window.location.href ="../RECEIPT_TicketNotification/Thanknotify.html";
    }
}
function sendMail(){
    let title_idd = title;
    let date_idd = date;
    let showTime_idd = time;
    let cinemas_idd = univ;
    let number_idd = number;
    let seatNumber_idd = `${selectedSeats}`;
    let name_idd = namee;
    let address_idd = addresss;
    let dateTimeString_idd = dateTimeString;
    let email_idd = email;
    let phone_idd = phone;

    (function(){
      emailjs.init("i1RjWXwwdpG8uCfND"); // Account Public Key
    })();

    var params = {
        title_id: title_idd,
        date_id: date_idd,
        showTime_id: showTime_idd,
        cinemas_id: cinemas_idd,
        number_id: number_idd,
        seatNumber_id: seatNumber_idd,

        name_id: name_idd,
        address_id: address_idd,
        dateTimeString_id: dateTimeString_idd,
        email_id: email_idd,
        phone_id: phone_idd
    };

    var serviceID = "service_s4fx2av"; // Email Service ID
    var templateID = "template_2volnam"; // Email Template ID
    var templateID = "template_ydz9t2i"; // Email Template ID

    emailjs.send(serviceID, templateID, params)
    .then( res => {
        alert("Email sent successfully!!")
    })
    .catch();
  }

// Create a new Date object
var currentDate = new Date();

// Get the current date
var day = currentDate.getDate();
var month = currentDate.getMonth(); // Months are zero-indexed
var year = currentDate.getFullYear();

// Get the current time
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();

// Array of month names
var monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
];

// Format the date
var formattedDate = monthNames[month] + ' ' + day + ', ' + year;

// Format the time in 12-hour format with AM/PM
var ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // Handle midnight (0:00) as 12 AM
var formattedTime = pad(hours) + ':' + pad(minutes) + ' ' + ampm;


// Combine date and time into a single string
var dateTimeString = formattedTime + ', ' + formattedDate ;

// Display the result
console.log('Current Date and Time: '+' '+ dateTimeString);

// Function to pad single-digit numbers with a leading zero
function pad(number) {
    return number < 10 ? '0' + number : number;
}

