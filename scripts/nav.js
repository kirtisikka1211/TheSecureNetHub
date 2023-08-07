// nav.js
const cardContainer = document.querySelector('.cards-container');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

const scrollStep = 400; // Adjust this value to change the scroll amount

prevButton.addEventListener('click', () => {
    cardContainer.scrollLeft -= scrollStep;
});

nextButton.addEventListener('click', () => {
    cardContainer.scrollLeft += scrollStep;
});
