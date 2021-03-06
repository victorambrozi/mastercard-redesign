window.addEventListener('load', start);

const slideButtons = [...document.querySelectorAll('.js-buttons')];
const slideContent = [...document.querySelectorAll('.js-slide')];


function initSlide() {
    if (slideButtons.length && slideContent.length) {
        const showContent = (index) => {
            slideContent.forEach((content) => content.classList.remove('active'));
            slideContent[index].classList.add('active');

            slideButtons.forEach((content) => content.classList.remove('active'));
            slideButtons[index].classList.add('active');
        };
        slideButtons.forEach((button, index) => {
            button.addEventListener('click', () => showContent(index));
        });
    };
};

const animateSearch = () => {
    const inputSearch = document.getElementById('search');
    const search = document.querySelector('.js-search');

    const showInput = () => {
        inputSearch.value = '';
        inputSearch.classList.remove('hide');
        inputSearch.classList.toggle('active');
        inputSearch.focus();
    };

    const hideInput = () => {
        inputSearch.classList.remove('active');
        inputSearch.classList.add('hide');
    };
    search.addEventListener('click', showInput);
    inputSearch.addEventListener('blur', hideInput);
};

const animateArrow = () => {
    const fieldArrows = [...document.querySelectorAll('.js-animation-arrow')];
    const arrows = [...document.querySelectorAll('.js-arrow')];

    if (fieldArrows.length && arrows.length) {
        const activeArrow = (index) => {
            arrows.forEach((arrow) => arrow.classList.remove('active'));
            arrows[index].classList.add('active');
        }
        fieldArrows.forEach((field, index) => {
            field.addEventListener('mouseover', () => activeArrow(index));
        });
    };
};

function start() {
    initSlide();
    animateSearch();
    animateArrow();
};