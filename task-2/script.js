document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Stop form from submitting
        let isValid = validateForm();
        if (isValid) {
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm() {
        let success = true;
        // Validate Name (required field)
        if (nameInput.value.trim() === '') {
            showError(nameInput, 'Name is required.');
            success = false;
        } else {
            clearError(nameInput);
        }

        // Validate Email (required and correct format)
        if (emailInput.value.trim() === '') {
            showError(emailInput, 'Email is required.');
            success = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address.');
            success = false;
        } else {
            clearError(emailInput);
        }

        // Validate Message (required field)
        if (messageInput.value.trim() === '') {
            showError(messageInput, 'Message is required.');
            success = false;
        } else {
            clearError(messageInput);
        }
        return success;
    }

    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');
        errorDisplay.innerText = message;
        input.classList.add('error');
    }

    function clearError(input) {
        const formGroup = input.parentElement;
        const errorDisplay = formGroup.querySelector('.error-message');
        errorDisplay.innerText = '';
        input.classList.remove('error');
    }

    function isValidEmail(email) {
        // Simple regex for email validation
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
});