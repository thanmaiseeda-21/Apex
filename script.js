// Objective: Implement simple interactions using JavaScript.
// Actions: Create a button that triggers an alert message when clicked.

// Get a reference to the button element using its ID
const myButton = document.getElementById('alertButton');
const feedbackParagraph = document.getElementById('feedbackMessage');

// Add an event listener to the button.
// When the button is 'click'ed, the function inside will be executed.
myButton.addEventListener('click', function() {
    // This is the action that happens when the button is clicked
    alert('Hello! You just clicked the button!'); // Displays a pop-up alert

    // Also, change the text of the feedback paragraph on the page
    feedbackParagraph.textContent = 'Button was clicked at ' + new Date().toLocaleTimeString();
    feedbackParagraph.style.color = '#dc3545'; // Change its color
    feedbackParagraph.style.fontWeight = 'bold';
    
    // Log a message to the browser's console (useful for debugging)
    console.log('The "Click Me" button was clicked!');
});

// You can add more JavaScript functionality here as you learn more!