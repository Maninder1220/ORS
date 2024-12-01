// Add an event listener to the form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the values from the form fields
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value;
    const email = document.getElementById('email').value;

    // Check if any of the fields are empty
    if (name === '' || number === '' || email === '') {
        alert('Please fill out all fields.');
        return;
    }

    // Validate the email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // If all validations pass, show a success message
    alert('Form submitted successfully!');
});

// Validates an email address format.
// This function uses a regular expression to check if the provided email
// address matches the standard email format.
// @param {string} email - The email address to validate.
// @returns {boolean} - Returns true if the email is valid, otherwise false.
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Get the form container element
const formContainer = document.querySelector('.form-container');
let isDragging = false; // Flag to track if the form is being dragged
let offsetX, offsetY; // Variables to store the offset values

// Add an event listener for the mousedown event on the form container
formContainer.addEventListener('mousedown', (e) => {
    isDragging = true; // Set the dragging flag to true
    offsetX = e.clientX - formContainer.offsetLeft; // Calculate the offset X value
    offsetY = e.clientY - formContainer.offsetTop; // Calculate the offset Y value
});

// Add an event listener for the mousemove event on the document
document.addEventListener('mousemove', (e) => {
    if (isDragging) { // Check if the form is being dragged
        // Update the position of the form container
        formContainer.style.left = `${e.clientX - offsetX}px`;
        formContainer.style.top = `${e.clientY - offsetY}px`;
    }
});

// Add an event listener for the mouseup event on the document
document.addEventListener('mouseup', () => {
    isDragging = false; // Set the dragging flag to false
});

function makeFormFall() {
    document.querySelector('.form-container').style.transition = 'transform 1s';
    document.querySelector('.form-container').style.transform = 'translateY(100vh)';
}