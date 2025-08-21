// Project Filtering Functionality
document.addEventListener('DOMContentLoaded', () => {
    // Get all filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event listener to each filter button
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get the filter value from the data-filter attribute
            const filterValue = button.getAttribute('data-filter');

            // Remove active class from all buttons
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            // Add active class to the clicked button
            button.classList.add('active');

            // Filter the project cards
            projectCards.forEach(card => {
                if (filterValue === 'all') {
                    // Show all cards if 'all' filter is selected
                    card.classList.remove('hidden');
                } else {
                    // Check if the card has the selected category
                    if (card.getAttribute('data-category') === filterValue) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                }
            });
        });
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !message) {
                showFormStatus('Please fill out all fields.', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showFormStatus('Please enter a valid email address.', 'error');
                return;
            }

            // Simulate form submission (in a real scenario, you'd send data to a server)
            // This is just a frontend demo with no actual backend processing
            setTimeout(() => {
                showFormStatus('Thank you! Your message has been sent.', 'success');
                contactForm.reset();
            }, 1000);
        });
    }

    // Email validation function
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show form status message
    function showFormStatus(message, type) {
        formStatus.textContent = message;
        formStatus.className = 'form-status';
        formStatus.classList.add(type);

        // Auto-hide message after 5 seconds
        setTimeout(() => {
            formStatus.style.display = 'none';
        }, 5000);

        formStatus.style.display = 'block';
    }
});



document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm('service_tp3amgs', 'template_qu2vkw7', this)
        .then(function () {
            alert("✅ Message sent successfully!");
            document.getElementById("contactForm").reset();
        }, function (error) {
            console.log(error);
            alert("❌ Failed to send message. Try again later.");
        });
});
