window.onload = function() {
    // Alert for subscribing when the user first enters the website
    const name = prompt("Welcome to VAZEER Classes! Please enter your name (optional):");

    if (name !== null && name.trim() !== "") {
        alert("Hello, " + name + "! Don't forget to subscribe for updates and notifications.");
    } else {
        alert("Welcome to VAZEER Classes! Don't forget to subscribe for updates and notifications.");
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Adjust scroll position if necessary
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation and old alerts for newsletter signup form
    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', function(event) {
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        } else {
            alert('Thank you for subscribing!');
        }
    });

    // Form validation and old alerts for feedback form
    const feedbackForm = document.getElementById('feedback-form');
    feedbackForm.addEventListener('submit', function(event) {
        const messageInput = feedbackForm.querySelector('textarea');
        const message = messageInput.value.trim();
        if (message === '') {
            alert('Please enter your feedback.');
            event.preventDefault();
        } else {
            alert('Thank you for your feedback!');
        }
    });

    // Function to validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
};
