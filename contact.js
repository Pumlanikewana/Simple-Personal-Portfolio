// Initialize EmailJS
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS Public Key
})();

// Initialize international telephone input
document.addEventListener('DOMContentLoaded', function() {
    const phoneInput = document.querySelector("#phonenumber");
    if (phoneInput && typeof intlTelInput !== 'undefined') {
        const iti = intlTelInput(phoneInput, {
            initialCountry: "ZA",  // South Africa as default
            preferredCountries: ["ZA", "US", "GB", "CA", "AU"],
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js", // For formatting and validation
            separateDialCode: true,
            nationalMode: false
        });

        // Update hidden input with full international number on form submit
        phoneInput.addEventListener('countrychange', function() {
            // Update the input when country changes
        });
    }

    // Form submission handler
    const contactForm = document.querySelector('.form');
    const formMessage = document.getElementById('form-message');
    const submitBtn = document.getElementById('submit-btn');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get phone number in international format
            const phoneInput = document.querySelector("#phonenumber");
            let fullPhoneNumber = '';
            if (window.intlTelInput && phoneInput) {
                const iti = window.intlTelInput.getInstance(phoneInput);
                if (iti.isValidNumber()) {
                    fullPhoneNumber = iti.getNumber();
                } else {
                    formMessage.textContent = 'Please enter a valid phone number.';
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = '#fee';
                    formMessage.style.color = '#c33';
                    return;
                }
            } else {
                fullPhoneNumber = phoneInput.value;
            }

            // Disable submit button
            submitBtn.disabled = true;
            submitBtn.value = 'Sending...';

            // Prepare template parameters
            const templateParams = {
                from_name: document.getElementById('firstname').value + ' ' + document.getElementById('lastname').value,
                from_email: document.getElementById('email').value,
                phone_number: fullPhoneNumber,
                message: document.getElementById('message').value,
                to_email: 'pumlanibasil15@gmail.com'
            };

            // Send email using EmailJS
            emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
                .then(function(response) {
                    // Success message
                    formMessage.textContent = 'Message sent successfully! I will get back to you soon.';
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = '#efe';
                    formMessage.style.color = '#3c3';
                    
                    // Reset form
                    contactForm.reset();
                    if (window.intlTelInput && phoneInput) {
                        const iti = window.intlTelInput.getInstance(phoneInput);
                        iti.setNumber('');
                    }
                    
                    // Hide message after 5 seconds
                    setTimeout(function() {
                        formMessage.style.display = 'none';
                    }, 5000);
                }, function(error) {
                    // Error message
                    formMessage.textContent = 'Failed to send the message. Please try again later or contact me directly at pumlanibasil15@gmail.com';
                    formMessage.style.display = 'block';
                    formMessage.style.backgroundColor = '#fee';
                    formMessage.style.color = '#c33';
                    console.log('EmailJS Error:', error);
                })
                .finally(function() {
                    // Re-enable submit button
                    submitBtn.disabled = false;
                    submitBtn.value = 'Send Message';
                });
        });
    }
});
