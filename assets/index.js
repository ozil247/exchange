 window.onload = function () {
   const navLink = document.getElementsByTagName('.navbar .menu-items li a');
   navLink.on('click', function (event) {
     navLink.classList.toggle('active'); // Remove 'active' class from all links
     console.log(link);
   });

 }
  window.onload = function () {
    //   document.write(
//    //     unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
//    // );

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

   const myCarouselElement = document.querySelector('#carouselExample')

    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 2000,
      touch: false
    });


 }