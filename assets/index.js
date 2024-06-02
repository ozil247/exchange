// document.write(
//   unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
// );

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

$(document).ready(function () {
  $("#main-slider").owlCarousel({
    items: 2,
    itemsDesktop: [1000, 2],
    itemsDesktopSmall: [980, 1],
    itemsTablet: [768, 1],
    pagination: true,
    navigation: true,
    navigationText: ["<", ">"],
    autoPlay: true
  });
});

$count = 1;
const arrowRight = $("#arrow-right");
const testimonials = $(".testimonial-contents");
const theseChildren = testimonials.children();
const testimonialArray = Array.from(theseChildren);
const active_child = '';
$counter = 0;
arrowRight.on("click", function () {
  const prevChild = testimonialArray[$count - 1];
  const active_child = testimonialArray[$count];
  
     prevChild.classList.remove('active');
     active_child.classList.add('active');
    $count++;
  console.log(testimonialArray.length);
});

const arrowLeft = $("#arrow-left");
arrowLeft.on("click", function () {
  
  const prevChild = testimonialArray[$count-1];
  const active_child = testimonialArray[$count];

    // const element = array[$count];
    prevChild.classList.add('active');
    active_child.classList.remove('active');    
  $count--;
   console.log($count);
});