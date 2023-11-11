let c = localStorage.getItem("c");
selectedSeats = JSON.parse(c);



window.onload = function() {
    let counter = document.getElementById("reserved");
   counter.textContent = `‎ ‎ Number of tickets: ${selectedSeats}`;
 }