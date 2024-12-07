
    document.querySelector("form").addEventListener("submit", function(e) {
        const inputs = document.querySelectorAll("input[required], textarea[required]");
        let valid = true;

        inputs.forEach(input => {
            if (!input.value) {
                valid = false;
                input.style.borderColor = "red";
            } else {
                input.style.borderColor = "#ccc";
            }
        });

        if (!valid) {
            e.preventDefault();
            alert("Please fill in all required fields.");
        }
    });



    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
    
        const firstName = document.getElementById('firstName').value;
        const fatherName = document.getElementById('lastName').value;
        const motherName = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const address = document.getElementById('message').value;

    
        // Validate if all required fields are filled
        if (!firstName || !lastName || !email || !phone || !message ) {
            alert('Please fill out all required fields.');
            return;
        }
    
        // Display confirmation alert for successful submission
        alert(`Thank you, ${firstName}! Your message successfully submitted.`);
    });
    
    