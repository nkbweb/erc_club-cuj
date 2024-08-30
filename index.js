
let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideElements = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slideElements.length;
    showSlide(currentSlide);
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

setInterval(nextSlide, 3000); // Change slide every 3 seconds

showSlide(currentSlide);



const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'flex'; // Show menu
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none'; // Hide menu
});