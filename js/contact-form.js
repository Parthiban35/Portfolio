// js/contact-form.js

// Initialize EmailJS with your Public Key (formerly user ID)
emailjs.init("uTAbapaTSyub8ymGn"); // Use your actual Public Key from EmailJS Dashboard

// Add event listener to handle form submission
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form reload

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var subject = document.getElementById("subject").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validate form fields
    if (!name || !email || !subject || !message) {
      alert("Please fill in all fields.");
      return;
    }

    // Prepare template parameters (must match your EmailJS template variable names)
    var templateParams = {
      from_name: name,
      from_email: email,
      subject: subject,
      message: message
    };

    // Send email using EmailJS
    emailjs.send("service_s4ln0ue", "template_7aap927", templateParams)
      .then(function(response) {
        alert("✅ Message sent successfully!");
        form.reset(); // Clear form after success
      }, function(error) {
        console.error("❌ EmailJS Error:", error);
        alert("Failed to send message. Please try again later.");
      });
  });
});
