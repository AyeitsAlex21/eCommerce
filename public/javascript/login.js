let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});


document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.querySelector('.login-box .clkbtn');
    const signupButton = document.querySelector('.signup-box .clkbtn');

    // Login form submission
    loginButton.addEventListener('click', function() {
        const email = document.querySelector('.login-box .email').value;
        const password = document.querySelector('.login-box .password').value;

        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Login Success:', data);
            // Handle login success (e.g., redirecting to another page)
        })
        .catch((error) => {
            console.error('Login Error:', error);
        });
    });

    // Signup form submission
    signupButton.addEventListener('click', function() {
        const firstName = document.querySelector('.signup-box .firstname').value;
        const lastName = document.getElementById('lastname').value; // Assuming the second `.name` input is for the last name
        const email = document.querySelector('.signup-box .email').value;
        const password = document.querySelector('.signup-box .password').value;
        const confirmPassword = document.querySelector('.signup-box .password:last-of-type').value; // Assuming the second `.password` input is for confirming the password

        // Optional: Add validation here (e.g., check if passwords match)
        console.log({ firstName, lastName, email, password, confirmPassword });
        fetch('/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Signup Success:', data);
        })
        .catch((error) => {
            console.error('Signup Error:', error);
        });
    });
});