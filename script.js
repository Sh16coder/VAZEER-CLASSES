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
