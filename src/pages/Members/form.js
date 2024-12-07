let currentSection = 0;
const sections = document.querySelectorAll(".section");
const steps = document.querySelectorAll(".step");

function showSection(n) {
    sections.forEach((section, index) => {
        section.style.display = index === n ? "block" : "none";
    });
    steps.forEach((step, index) => {
        step.classList.toggle("active", index === n);
    });
    updateButtons(n);
}

function nextSection() {
    // Validate required fields in the current section
    const currentFields = sections[currentSection].querySelectorAll("input[required], textarea[required], select[required]");
    let allFieldsFilled = true;

    currentFields.forEach(field => {
        if (!field.value.trim()) {
            allFieldsFilled = false;
            field.classList.add("error"); // Add error class for visual feedback
            field.placeholder = "This field is required"; // Show message
        } else {
            field.classList.remove("error");
        }
    });

    if (allFieldsFilled) {
        if (currentSection < sections.length - 1) {
            currentSection++;
            showSection(currentSection);
        }
    } else {
        alert('Please fill out all required fields.'); // Display alert message
    }
}

function prevSection() {
    if (currentSection > 0) {
        currentSection--;
        showSection(currentSection);
    }
}

function updateButtons(n) {
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    prevBtn.style.display = n === 0 ? "none" : "inline-block";
    nextBtn.textContent = n === sections.length - 1 ? "Submit" : "Next";
    nextBtn.type = n === sections.length - 1 ? "submit" : "button";
}

document.addEventListener("DOMContentLoaded", () => {
    showSection(currentSection);
});

// Error styling for empty required fields
document.querySelectorAll("input[required], textarea[required]").forEach(field => {
    field.addEventListener("input", () => {
        if (field.value.trim()) {
            field.classList.remove("error");
        }
    });
});







document.getElementById('multiStepForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const firstName = document.getElementById('firstName').value;
    const fatherName = document.getElementById('fatherName').value;
    const motherName = document.getElementById('motherName').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const aadhar = document.getElementById('aadhar').value;
    const membershipAmount = document.getElementById('membershipAmount').value;

    // Validate if all required fields are filled
    if (!firstName || !fatherName || !motherName || !dob || !phone || !address || !aadhar || !membershipAmount) {
        alert('Please fill out all required fields.');
        return;
    }

    // Display confirmation alert for successful submission
    alert(`Thank you, ${firstName}! You have selected a membership of ₹${membershipAmount}.`);
});


//Membership//
const toggleSwitch = document.getElementById('toggle-switch');
const proPrice = document.getElementById('pro-price');
const teamPrice = document.getElementById('team-price');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
    // Yearly pricing with discount
    proPrice.textContent = "12";
    teamPrice.textContent = "20";
  } else {
    // Monthly pricing
    proPrice.textContent = "15";
    teamPrice.textContent = "25";
  }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//members

document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll(".read-more");

    readMoreLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            alert("This would take you to the full blog post.");
        });
    });
});
