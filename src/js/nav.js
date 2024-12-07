      
// Selecting the elements
const hamburger = document.querySelector('.hamburger');
const popupMenu = document.querySelector('.popup-menu');
const closePopup = document.querySelector('.close-popup');
const overlay = document.querySelector('.overlay');

// Open the popup menu when hamburger is clicked
hamburger.addEventListener('click', () => {
    popupMenu.classList.remove('hidden');
    popupMenu.classList.add('show');
    overlay.classList.remove('hidden'); // Show overlay
});

// Close the popup menu when close button is clicked
closePopup.addEventListener('click', () => {
    closePopupMenu();
});

// Close the popup menu when clicking outside of it
overlay.addEventListener('click', () => {
    closePopupMenu();
});

// Function to close the popup menu
function closePopupMenu() {
    popupMenu.classList.remove('show');
    setTimeout(() => {
        popupMenu.classList.add('hidden'); // Hide after transition completes
        overlay.classList.add('hidden'); // Hide overlay
    }, 300); // Match the timeout with the CSS transition duration
}
