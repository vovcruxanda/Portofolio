ScrollTrigger.create({
    animation: gsap.from(".logo", {
        y: "50vh",
        scale: 6,
        yPercent: -50
    }), // Removed the asterisk
    scrub: true,
    trigger: ".content",
    start: "top bottom",
    endTrigger: ".content",
    end: "top center",
});


// Get the button
const topButton = document.getElementById('top-button');

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Change 300 to the scroll position at which you want the button to appear
        topButton.classList.add('show');
    } else {
        topButton.classList.remove('show');
    }
});


document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });

// JavaScript for an infinite carousel effect
const carousel = document.querySelector('.projects-carousel');

// Clone the project cards to create an infinite loop effect
const cloneCards = () => {
    const cards = Array.from(carousel.children);
    cards.forEach((card) => {
        const clone = card.cloneNode(true);
        carousel.appendChild(clone);
    });
};

// Initialize the cloning function
cloneCards();

// Function to check scroll position and reset if necessary
const resetScrollPosition = () => {
    if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
        carousel.scrollLeft = 0;
    }
};

// Add an event listener to monitor scroll
carousel.addEventListener('scroll', resetScrollPosition);

