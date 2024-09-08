
const mainImage = document.getElementById('main-image');
const mainText = document.getElementById('main-text');
const miniSlides = document.querySelectorAll('.mini-slide');
const controlBtn = document.getElementById('control-btn');

let currentIndex = 0;
let autoSlideInterval;
const images = [
    {
        src: 'slide1.jpg',
        text: '1.'
    },
    {
        src: 'slide2.jpg',
        text: '2.'
    },
    {
        src: 'slide3.jpg',
        text: '3.'
    },
    {
        src: 'slide4.jpg',
        text: '4.'
    },
    {
        src: 'slide5.jpg',
        text: '5'
    },
    
];

function changeSlide(index) {
    document.querySelector('.main-slide').classList.add('shrinking');

    setTimeout(() => {
        mainImage.src = images[index].src;
        mainText.textContent = images[index].text;

        miniSlides[currentIndex].classList.remove('active');
        miniSlides[index].classList.add('active');

        currentIndex = index;

        document.querySelector('.main-slide').classList.remove('shrinking');
        document.querySelector('.main-slide').classList.add('enlarging');

        setTimeout(() => {
            document.querySelector('.main-slide').classList.remove('enlarging');
        }, 2000);

    }, 500);
}

function autoSlide() {
    let nextIndex = (currentIndex + 1) % images.length;
    changeSlide(nextIndex);
}

function startAutoSlide() {
    autoSlide();
    autoSlideInterval = setInterval(autoSlide, 6000); // Adjusted interval to match transition time
    controlBtn.classList.remove('play');
    controlBtn.classList.add('pause');
    controlBtn.innerHTML = '<i class="fas fa-pause"></i>'; // Change to pause icon
}

function stopAutoSlide() {
    clearInterval(autoSlideInterval);
    controlBtn.classList.remove('pause');
    controlBtn.classList.add('play');
    controlBtn.innerHTML = '<i class="fas fa-play"></i>'; // Change to play icon
}

miniSlides.forEach((slide, index) => {
    slide.addEventListener('click', () => changeSlide(index));
});

controlBtn.addEventListener('click', () => {
    if (controlBtn.classList.contains('play')) {
        startAutoSlide();
    } else {
        stopAutoSlide();
    }
});

startAutoSlide(); // Start automatic slide show on page load



const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const closeMenu = document.querySelector('.close-menu');

menuIcon.addEventListener('click', () => {
    mobileMenu.style.display = 'flex'; // Show menu
});

closeMenu.addEventListener('click', () => {
    mobileMenu.style.display = 'none'; // Hide menu
});
