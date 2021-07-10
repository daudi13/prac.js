const sliderContainer = document.querySelector('.slider-container');
const slideRight = document.querySelector('.right-slider');
const slideLeft = document.querySelector('.left-slider');
const btnUp = document.querySelector('.left-btn');
const btnDown = document.querySelector('.right-btn');
const slidesLength = slideRight.querySelectorAll('div').length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

btnUp.addEventListener('click', () => changeSlide('up'));
btnDown.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
    const sliderHeight = sliderContainer.clientHeight
    if (direction === 'up') {
        activeSlideIndex++;

        if (activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--;
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesLength -1
        }
    }


    slideRight.style.transform = `translateY(-${activeSlideIndex*sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex*sliderHeight}px)`
}