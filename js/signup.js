const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    // Stop page reload
    event.preventDefault();

    // Get input values
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    // Email validation
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Password validation
    if (password === "") {
        alert("Please enter your password.");
        return;
    }

    // Minimum password length
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Signup success message
    alert("Your signup form has been submitted successfully!");

    // Reset form
    form.reset();

});