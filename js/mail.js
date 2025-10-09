// contact-form.js

// Initialize EmailJS with your user ID
emailjs.init("uTAbapaTSyub8ymGn");  // Replace YOUR_USER_ID with your actual user ID from EmailJS

// Add event listener to handle form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent the default form submission (page reload)

    // Get form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    // Prepare the template parameters (these should match the ones you set in EmailJS)
    var templateParams = {
        from_name: name,
        from_email: email,
        subject: subject,
        message: message
    };

    // Send the email using EmailJS
    emailjs.send("service_s4ln0ue", "template_7aap927", templateParams)  // Replace with your service and template IDs
        .then(function(response) {
            alert("Message sent successfully!");
        }, function(error) {
            alert("Failed to send the message. Error: " + error.text);
        });
});

