// Initialize international telephone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector("#phonenumber");
    if (phoneInput && typeof intlTelInput !== 'undefined') {
        intlTelInput(phoneInput, {
            initialCountry: "ZA",  // Set an initial country if desired
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js" // For formatting and validation
        });
    }
});

// EmailJS form submission handler (commented out - uncomment and configure when ready)
/*
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Initialize EmailJS (uncomment when you have your user ID)
            // emailjs.init("YOUR_USER_ID");
            
            emailjs.sendForm('service_mastality00', 'contact.template', this)
                .then(function() {
                    alert('Message sent successfully!');
                }, function(error) {
                    alert('Failed to send the message. Please try again later.');
                    console.log('Failed...', error);
                });
        });
    }
});
*/

