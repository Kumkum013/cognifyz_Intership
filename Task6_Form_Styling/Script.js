// Select form and inputs
const form = document.querySelector("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const nameField = document.getElementById("Name");
const message = document.getElementById("Message");

// Form submit event
form.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent automa tic refresh

    let errors = [];

    // Email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
        errors.push("Please enter a valid email.");
    }

    // Password validation
    if (password.value.length < 6) {
        errors.push("Password must be at least 6 characters.");
    }

    // Name validation
    if (nameField.value.trim() === "") {
        errors.push("Name cannot be empty.");
    }

    // Message validation
    if (message.value.trim() === "") {
        errors.push("Message cannot be empty.");
    }

    // If errors exist → show alert
    if (errors.length > 0) {
        alert(errors.join("\n"));
    } 
    else {
        alert("Form submitted successfully!");
        form.reset(); // Clear the form
    }
});
