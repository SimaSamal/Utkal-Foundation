

//Slider Hero Image
document.addEventListener('DOMContentLoaded', function() {
    const slidesData = [
        {
            image: '/src/assets/images/1.webp',
            caption: 'A Brighter Future Begins with Education',
            title: 'A Brighter Future Begins with Education',
            description: 'Every child deserves the chance to learn and grow. At Utkal Foundation, we provide essential education tools and opportunities for underprivileged children, giving them the power to break free from poverty and build a successful future. Together, we can open doors to endless possibilities.',
            buttons: [
                { text: 'Get in Touch', link: '/src/pages/contactPage/contact.html', style: 'sliderbutton' }
            ]
        },
        {
            image: '/src/assets/images/2.webp',
            caption: 'Bringing Health and Hope to the Needy',
            title: 'Bringing Health and Hope to the Needy',
            description: 'Good health is the foundation of a thriving community. Our health camps provide life-saving care, medical check-ups, and essential treatments to those who have no access to healthcare. Together, we can heal communities, one life at a time.',
            buttons: [
                { text: 'Get in Touch', link: '/src/pages/contactPage/contact.html', style: 'sliderbutton' }
            ]
        },
        {
            image: '/src/assets/images/3.webp',
            caption: 'Protecting the Planet, One Tree at a Time',
            title: 'Protecting the Planet, One Tree at a Time',
            description: 'Environmental conservation is a key priority for Utkal Foundation. Our Tree Plantation Drives and green initiatives aim to restore natural habitats, increase biodiversity, and combat climate change. Join us in nurturing a greener, healthier planet for future generations.',
            buttons: [
                { text: 'Get in Touch', link: '/src/pages/contactPage/contact.html', style: 'sliderbutton' }
            ]
        }
    ];        

    const sliderContainer = document.querySelector('.slider');
    const buttonsContainer = document.querySelector('.buttons-container');
    const titleElement = document.getElementById('sliderTitle');
    const descriptionElement = document.getElementById('sliderDescription');
    let currentSlide = 0;

    function renderSlide() {
        const slide = slidesData[currentSlide];
        sliderContainer.innerHTML = `<img src="${slide.image}" class="slide-image" alt="${slide.caption}">`;
        titleElement.textContent = slide.title;
        descriptionElement.textContent = slide.description;
        buttonsContainer.innerHTML = slide.buttons.map(button => `
            <a href="${button.link}" class="${button.style}">${button.text}</a>
        `).join('');
    }

    function showNextSlide() {
        currentSlide = (currentSlide + 1) % slidesData.length;
        renderSlide();
    }

    function showPrevSlide() {
        currentSlide = (currentSlide - 1 + slidesData.length) % slidesData.length;
        renderSlide();
    }

    // Event listeners for carousel controls
    document.getElementById('nextSlide').addEventListener('click', showNextSlide);
    document.getElementById('prevSlide').addEventListener('click', showPrevSlide);

    // Automatic slide change every 3 seconds
    renderSlide();
    setInterval(showNextSlide, 3000);
});



// Smooth hover effect (already handled in CSS)
// You can add any JavaScript interactions if needed later

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });
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



//catalog sliding function

let currentSlide = 0;
const uniqueSlider = document.getElementById('uniqueSlider');
const totalSlides = uniqueSlider.children.length; // Automatically gets the number of slides

function moveSlide(direction) {
    const slideWidth = uniqueSlider.children[0].offsetWidth;
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } 
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    uniqueSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Auto slide every 3 seconds
let autoSlideInterval;

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        moveSlide(1);
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for hover
uniqueSlider.addEventListener('mouseenter', stopAutoSlide);
uniqueSlider.addEventListener('mouseleave', startAutoSlide);

// Keyboard navigation
window.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        moveSlide(1);
    } else if (event.key === 'ArrowLeft') {
        moveSlide(-1);
    }
});

// Resize handling
window.addEventListener('resize', () => {
    const slideWidth = uniqueSlider.children[0].offsetWidth;
    uniqueSlider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

// Start automatic sliding
startAutoSlide();



