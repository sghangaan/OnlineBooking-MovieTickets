var date = localStorage.getItem("date");
let time = localStorage.getItem("time");
let c = localStorage.getItem("c");
selectedSeats = JSON.parse(c);



window.onload = function() {
    let counter = document.getElementById("reserved");
   counter.textContent = `‎ ‎ Selected Seats: ${selectedSeats}`;
   let datee = document.getElementById("date");
   datee.textContent = `${date}`;
   let timee = document.getElementById("time");
   timee.textContent = `${time}`;
 }

 function storeData(){
 let name = document.getElementById("name").value;
 localStorage.setItem("name", JSON.stringify(name));
 let email = document.getElementById("email").value;
 localStorage.setItem("email", JSON.stringify(email));
 let phone = document.getElementById("phone").value;
 localStorage.setItem("phone", JSON.stringify(phone));
 let address = document.getElementById("address").value;
 localStorage.setItem("address", JSON.stringify(address));
 }