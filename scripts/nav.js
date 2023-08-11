const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');
const cardContainer = document.querySelector('.cards-container');

const scrollStep = 200; // Adjust this value to change the scroll amount

if (prevButton && nextButton && cardContainer) {
    prevButton.addEventListener('click', () => {
        cardContainer.scrollTop -= scrollStep;
    });

    nextButton.addEventListener('click', () => {
        cardContainer.scrollTop += scrollStep;
    });
}
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
