// Get the form element by its ID
const form = document.getElementById('signupForm');

// Add a listener to handle form submission
form.addEventListener('submit', function (e) {
  // Prevent the default form submission (so the page doesn't reload)
  e.preventDefault();

  // Clear any previous error messages
  document.getElementById('firstNameError').textContent = '';
  document.getElementById('lastNameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('passwordError').textContent = '';

  // Assume the form is valid unless a problem is found
  let isValid = true;

  // Get and trim user input values
  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const password = form.password.value;

  // Validate First Name
  if (firstName === '') {
    document.getElementById('firstNameError').textContent = 'Enter first name.';
    isValid = false;
  }

  // Validate Last Name
  if (lastName === '') {
    document.getElementById('lastNameError').textContent = 'Enter last name.';
    isValid = false;
  }

  // Validate Email format using a regular expression
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    document.getElementById('emailError').textContent = 'Enter valid email.';
    isValid = false;
  }

  // Validate Password length (minimum 6 characters)
  if (password.length < 6) {
    document.getElementById('passwordError').textContent = 'Minimum 6 characters.';
    isValid = false;
  }

  // If all fields are valid, show a success message and reset the form
  if (isValid) {
    alert('Sign up successful!');
    form.reset();
  }
});

