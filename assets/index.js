const initializeApp = async () => {
  const navLinks = document.querySelectorAll('.menu-items li a, .user-assets li a');
  navLinks.forEach(navLink => { navLink.addEventListener('click', changeNavLinkColor) });

  const myCarouselElement = document.querySelector('#carouselExample')

  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: true
  });
}
  

document.addEventListener('DOMContentLoaded', initializeApp);

  window.onload = function () {

    $(document).ready(function () {
      // Add smooth scrolling to all links
     $("a").on("click", function (event) {
       // Make sure this.hash has a value before overriding default behavior
       if (this.hash !== "") {
        // Prevent default anchor click behavior
       event.preventDefault();

       // Store hash
        var hash = this.hash;

          // Using jQuery's animate() method to add smooth page scroll
         // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $("html, body").animate({
             scrollTop: $(hash).offset().top,
            },
           800,
          function () {
            // Add hash (#) to URL when done scrolling (default click behavior)
             window.location.hash = hash;
           }
      );
     } // End if
     });

    });

   


}
 
const changeNavLinkColor = (e) => {
  e.preventDefault();
  console.log(e);
  e.target.classList.toggle('active');
 }