
const slideButtons = [...document.querySelectorAll('.js-buttons')];
const slideContent = [...document.querySelectorAll('.js-slide')];

if (slideButtons.length && slideContent.length) {
    slideContent[0].classList.add('active');
    slideButtons[0].classList.add('active');

    const showContent = (index) => {
        slideContent.forEach((content) => content.classList.remove('active'));
        slideContent[index].classList.add('active');

        slideButtons.forEach((content) => content.classList.remove('active'));
        slideButtons[index].classList.add('active');
    };

    slideButtons.forEach((button, index) => {
        button.addEventListener('click', () => showContent(index));
    })
}
