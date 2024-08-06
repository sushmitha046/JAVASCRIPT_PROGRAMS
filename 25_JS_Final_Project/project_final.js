
function validateForm(event){
    event.preventDefault(); 
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirmPassword').value.trim();
    const namePattern = /^[a-zA-Z ]{2,30}$/; 
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    const passwordPattern = /^.{6,}$/;
    let isValid = true;
    let errorMessage = "";
    if (!namePattern.test(name)) {
        isValid = false;
        errorMessage += "Invalid name. ";
    }
    if (!emailPattern.test(email)) {
        isValid = false;
        errorMessage += "Invalid email. ";
    }
    if (!passwordPattern.test(password)) {
        isValid = false;
        errorMessage += "Password must be at least 6 characters. ";
    }
    if (password !== confirmPassword) {
        isValid = false;
        errorMessage += "Passwords do not match. ";
    }
    const errorElement = document.getElementById('error-message');
    if (!isValid) {
        errorElement.textContent = errorMessage;
    } else {
        errorElement.textContent = ""; 
        alert('Form submitted successfully!');
        document.getElementById('validationForm').reset();
    } }
    