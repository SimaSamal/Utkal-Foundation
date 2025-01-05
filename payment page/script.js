document.addEventListener("DOMContentLoaded", () => {
    const donatePopup = document.getElementById("donatePopup");
    const closePopup = document.getElementById("closePopup");
    const tabs = document.querySelectorAll(".tab");
    const tabContents = document.querySelectorAll(".tab-content");

    // Automatically display the popup on page load
    donatePopup.style.display = "flex";

    // Close the popup when the close button is clicked
    closePopup.addEventListener("click", () => {
        donatePopup.style.display = "none";
    });

    // Tab functionality
    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            // Remove active classes
            tabs.forEach((t) => t.classList.remove("active"));
            tabContents.forEach((tc) => tc.classList.remove("active"));

            // Add active classes
            tab.classList.add("active");
            document.getElementById(tab.dataset.target).classList.add("active");
        });
    });

    // Payment form submission
    document.getElementById("paymentForm").addEventListener("submit", (event) => {
        event.preventDefault();
        alert("Thank you for your donation!");
        donatePopup.style.display = "none";
    });
});
