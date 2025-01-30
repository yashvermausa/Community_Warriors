
const buttons = document.querySelectorAll("[data-carousel-button]");
const carousel = document.querySelector("[data-carousel]");
const slides = carousel.querySelector("[data-slides]");
let intervalId;

function changeSlide(offset) {
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
    
}

function startAutoSlide() {
    intervalId = setInterval(() => changeSlide(1), 10000); // Change slide every 5 seconds
}

function stopAutoSlide() {
    clearInterval(intervalId);
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        stopAutoSlide(); // Stop auto-sliding when a button is clicked
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        changeSlide(offset);
        startAutoSlide(); // Restart auto-sliding after the manual change
    });
});

startAutoSlide(); 



document.addEventListener('DOMContentLoaded', function() {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileNav = document.getElementById('mobile-nav');

    hamburgerMenu.addEventListener('click', function() {
        mobileNav.classList.toggle('active');

        // Toggle hamburger icon animation (optional)
        hamburgerMenu.classList.toggle('open');
    });
});

// Start the automatic sliding when the page loads
