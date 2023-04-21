// const left = document.querySelector(".left");
// const middle = document.querySelector(".middle");
// const photo = document.querySelectorAll(".photo");
// const right = document.querySelector(".right");
// const left_arrow = document.querySelector(".left-arrow");
// const right_arrow = document.querySelector(".right-arrow");


// let currentIndex = 1;
// let p = 5;
// let n = 2

// function remove() {
//     photo[0].classList.remove('photo-' + p);
//     left.classList.remove('photo-' + p);
//     photo[1].classList.remove('photo-' + currentIndex);
//     middle.classList.remove('photo-' + currentIndex);
//     photo[2].classList.remove('photo-' + n);
//     right.classList.remove('photo-' + n);
// }

// function add() {
//     photo[0].classList.add('photo-' + p);
//     left.classList.add('photo-' + p);
//     photo[1].classList.add('photo-' + currentIndex);
//     middle.classList.add('photo-' + currentIndex);
//     photo[2].classList.add('photo-' + n);
//     right.classList.add('photo-' + n);
// }

// function right_button() {
//     remove();
//     let temp = n;
//     p = currentIndex;
//     currentIndex = n;
//     n = temp == 5 ? 1 : temp + 1;
//     add();
// }

// function left_button() {
//     remove();
//     let temp = p;
//     n = currentIndex;
//     currentIndex = p;
//     p = temp == 1 ? 5 : temp - 1;
//     add();
// }

// right.addEventListener("click", function () {
//     right_button();
// });

// left.addEventListener("click", function () {
//     left_button();
// });

// right_arrow.addEventListener("click", function () {
//     right_button();
// });

// left_arrow.addEventListener("click", function () {
//     left_button();
// });

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.slider__btn--prev');
const nextButton = document.querySelector('.slider__btn--next');

let currentSlide = 0;
let touchStartX = 0;
let touchEndX = 0;

// Обробник події для переміщення слайдів
function moveSlide() {
    const slideWidth = slides[0].clientWidth;
    const slideOffset = currentSlide * slideWidth * -1;
    document.querySelector('.slides').style.transform = `translateX(${slideOffset}px)`;
}

// Обробник події для перевірки стану кнопок
function updateButtons() {
    prevButton.disabled = currentSlide === 0;
    nextButton.disabled = currentSlide === slides.length - 1;
}

// Обробник події для кнопки "попередня"
prevButton.addEventListener('click', () => {
    currentSlide--;
    moveSlide();
    updateButtons();
});

// Обробник події для кнопки "на
nextButton.addEventListener('click', () => {
    currentSlide++;
    moveSlide();
    updateButtons();
});

// Обробник події для торкання по екрану
slider.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

// Обробник події для руху пальця по екрану
slider.addEventListener('touchmove', (event) => {
    event.preventDefault(); // запобігти прокрутці сторінки під час перегортання фотографій
    touchEndX = event.touches[0].clientX;
});

// Обробник події для відпускання екрану
slider.addEventListener('touchend', () => {
    const touchDiff = touchStartX - touchEndX;
    const slideWidth = slides[0].clientWidth;

    // якщо рух пальця більше 50 пікселів, перемістити слайд
    if (Math.abs(touchDiff) > 50) {
        if (touchDiff > 0 && currentSlide < slides.length - 1) {
            currentSlide++;
        } else if (touchDiff < 0 && currentSlide > 0) {
            currentSlide--;
        }
    }

    moveSlide();
    updateButtons();
});

// ініціалізація
updateButtons();