const customSliderWrapper = document.getElementById('custom-slider-wrapper');
const customSlides = document.querySelectorAll('.custom-slide');
const customPrevBtn = document.getElementById('custom-prev');
const customNextBtn = document.getElementById('custom-next');
let customCounter = 0;

customNextBtn.addEventListener('click', () => {
    if (customCounter < customSlides.length - 1) {
        customCounter++;
    } else {
        customCounter = 0;
    }
    updateCustomSlider();
});

customPrevBtn.addEventListener('click', () => {
    if (customCounter > 0) {
        customCounter--;
    } else {
        customCounter = customSlides.length - 1;
    }
    updateCustomSlider();
});

function updateCustomSlider() {
    const newTransformValue = -customCounter * 100 + '%';
    customSliderWrapper.style.transform = `translateX(${newTransformValue})`;
}