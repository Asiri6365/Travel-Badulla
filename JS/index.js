// Function for the Hero Button
function welcomeMessage() {
    alert("Ayubowan! Welcome to your Sri Lanka Travel Guide. Get ready for an adventure!");
}

// Optional: Add an interactive "click" effect to the Destination Cards
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function() {
        // This simple line shows an alert with the name of the place clicked
        const placeName = this.innerText;
        alert("You clicked on " + placeName + "! Would you like to see more details?");
    });
});