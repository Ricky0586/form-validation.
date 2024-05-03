function validateForm() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var valid = true;

    // Validate email format
    if (!emailInput.checkValidity()) {
        emailError.textContent = "Please enter a valid email address";
        valid = false;
    } else {
        emailError.textContent = "";
    }

    // Validate password length
    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
        valid = false;
    } else {
        passwordError.textContent = "";
    }

    return valid;
}
