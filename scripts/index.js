window.addEventListener('load', function() {
  const aboutPage = document.querySelector('.about-page');
  const screenHeight = window.innerHeight;

  // Add a class to trigger the initial fade-in animation
  aboutPage.classList.add('fade-in');

  // Delay before scrolling and fading out
  setTimeout(function() {
      // Scroll smoothly down the page
      window.scrollTo({
          top: screenHeight,
          behavior: 'smooth'
      });

      // Delay before fading out and opening the next page
      setTimeout(function() {
          // Fade out the current page
          document.body.style.transition = 'opacity 1s';
          document.body.style.opacity = '0';

          // Delay before opening the next page
          setTimeout(function() {
              window.location.href = 'new_page.html'; 
          }, 1000);
      }, 1000);
  }, 3000);
});
