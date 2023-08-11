<<<<<<< HEAD
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
=======
function myFunction() {
    var x = document.getElementById("myTopnav");
    var sidebar = document.getElementById("slidingSidebar");
    
    if (x.className === "topnav") {
        x.className += " responsive";
        sidebar.style.right = "0"; // Slide in the sidebar
    } else {
        x.className = "topnav";
        sidebar.style.right = "-250px"; // Slide out the sidebar
    }
    
}
function closeSidebar() {
    document.getElementById("slidingSidebar").style.right = "-250px";
}
>>>>>>> fbd7a993977b86c1979e3135b4de5ffe18d38aaa
