let images = document.querySelectorAll(".image");
let backwardBtn = document.querySelector(".backward");
let forwardBtn = document.querySelector(".forward");
let current = 0;

forwardBtn.addEventListener('click', () => {
    images[current].classList.remove('current');
    if (current + 1 > images.length - 1) {
        current = -1;
    }
    images[current + 1].classList.add('current');
    current++;
});
backwardBtn.addEventListener('click', () => {
    images[current].classList.remove('current');
    if (current - 1 < 0) {
        current = images.length;
    }
    images[current - 1].classList.add('current');
    current--;
});