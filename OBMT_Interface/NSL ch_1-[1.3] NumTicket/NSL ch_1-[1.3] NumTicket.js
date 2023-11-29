let availableSeat = 36;
 
const minusButton = document.getElementById('minus');
    const plusButton = document.getElementById('plus');
    const inputField = document.getElementById('input');
                        
    const minValue = 0; // Minimum value
    const maxValue = 8; // Maximum value

    minusButton.addEventListener('click', event => {
        event.preventDefault();
        let currentValue = Number(inputField.value) || 0;
            if (currentValue > minValue) {
            inputField.value = currentValue - 1;
            }
            });

    plusButton.addEventListener('click', event => {
        event.preventDefault();
        let currentValue = Number(inputField.value) || 0;
            if (currentValue < maxValue) {
            inputField.value = currentValue + 1;
            }
            });

    document.getElementById("input").addEventListener("change", function() {
        let v = parseInt(this.value);
            if (v < 1) this.value = 1;
            if (v > 8) this.value = 8;
            });
 
function storeName() {
    // Get the user's name from the input field
    var b = document.getElementById("input").value;
    var moviee = "Blue Beetle";
    
    if (b==0){
        alert("Please Enter the Desired Quantity of Tickets")
    }

    else{
    // Store the user's name in localStorage
    localStorage.setItem("b", b);
    localStorage.setItem("moviee", moviee);
    window.location.href = "../FrameReservation/FrameReservation.html";
    }
}


window.onload = function() {
    let counter = document.getElementById("seats");
    counter.textContent = `Available Seats: ${availableSeat}`;
}