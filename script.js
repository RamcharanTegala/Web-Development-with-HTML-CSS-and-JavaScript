// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', function() {

    // Find the button by its ID
    const alertButton = document.getElementById('alertButton');

    // Add an event listener for clicks
    alertButton.addEventListener('click', function() {
        // Show an alert message when the button is clicked
        alert('Hello! You clicked the button!');
    });

});