window.addEventListener('load', start);


function initSlide() {
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
        });
    };
};

function animateSearch() {
    const inputSearch = document.getElementById('search');
    const search = document.querySelector('.js-search');

    const showInput = () => {
        inputSearch.value = '';
        inputSearch.classList.toggle('active');
    }
    search.addEventListener('click', showInput);
};

function start() {
    initSlide();
    animateSearch();
};