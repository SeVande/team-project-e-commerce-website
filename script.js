// countdown timer



// Set the target date (YYYY, MM - 1, DD, HH, MM, SS)
const targetDate = new Date("2025-02-14 23:59:59").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference < 0) {
        document.querySelector(".countdown").innerHTML = "Time's up!";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days.toString().padStart(2, "0");
    document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
    document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
    document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Run immediately

const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
let interval;


function updateCarousel() {
    carousel.style.transform = `translateX(${-index * 100}%)`;
    
}


function nextSlide() {
    index = (index + 1) % slides.length;
    updateCarousel();
}

function prevSlide() {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
}

function startAutoplay() {
    interval = setInterval(nextSlide, 5000); // Change slide every 3s
}

function stopAutoplay() {
    clearInterval(interval);
}

nextBtn.addEventListener('click', () => {
    stopAutoplay();
    nextSlide();
    startAutoplay();
});

prevBtn.addEventListener('click', () => {
    stopAutoplay();
    prevSlide();
    startAutoplay();
});

startAutoplay();





