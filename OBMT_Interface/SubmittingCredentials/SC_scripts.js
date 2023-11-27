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