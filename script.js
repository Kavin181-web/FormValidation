const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

// Email validation pattern
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

// Main validation function
function validateForm() {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    // Email validation
    if (!emailInput.value.match(emailPattern)) {
        emailError.textContent = "Enter a valid email";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    // Password validation
    if (passwordInput.value.length < 6) {
        passwordError.textContent = "Minimum 6 characters required";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }

    // Enable or disable button
    submitBtn.disabled = !isValid;
}

// Real-time validation
nameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);

// Prevent form submission
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});