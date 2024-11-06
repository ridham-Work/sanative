// to get current year
function getYear() {
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

const images = [
"images/hero-bg.png",
"images/heroimg-2.jpg",
"images/heroimg-3.jpg"
];
let currentIndex = 0;

// Check if the device is mobile
const isMobile = window.innerWidth <= 768; // Define mobile breakpoint

// Set initial image based on device type
if (isMobile) {
  document.getElementById('heroImage').src = "images/mbhero.jpg"; // Set to the mobile-specific image
} else {
  document.getElementById('heroImage').src = images[currentIndex]; // Default to the first image for non-mobile
}

setInterval(() => {
currentIndex = (currentIndex + 1) % images.length;
document.getElementById('heroImage').src = images[currentIndex];

// Toggle overlay
const overlay = document.getElementById('overlay');
if (currentIndex === 0) {
  overlay.style.display = 'none';
} else {
  overlay.style.display = 'block';
}
}, 5000);

document.addEventListener('DOMContentLoaded', function() {
  const servicesWrapper = document.querySelector('.services_wrapper');
  let scrollAmount = 0;
  const scrollStep = 1; // Adjust the scroll speed for smoother effect
  const scrollInterval = 10; // Adjust the scroll interval for smoother effect

  function autoScroll() {
    scrollAmount += scrollStep;
    if (scrollAmount >= servicesWrapper.scrollWidth - servicesWrapper.clientWidth) {
      scrollAmount = 0;
    }
    servicesWrapper.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }

  setInterval(autoScroll, scrollInterval);
});

document.addEventListener("DOMContentLoaded", function() {
  const typewriterElements = document.querySelectorAll('.typewriter');
  const isMobile = window.innerWidth <= 768; // Define mobile breakpoint

  typewriterElements.forEach(element => {
      const originalText = element.textContent;
      element.textContent = '';
      let i = 0;

      function typeWriter() {
          if (i < originalText.length) {
              element.textContent += originalText.charAt(i);
              i++;
              setTimeout(typeWriter, 150); // Adjust typing speed here
          } else if (!isMobile) {
              // If not mobile, restart the effect
              setTimeout(() => {
                  element.textContent = '';
                  i = 0;
                  typeWriter();
              }, 1000); // Delay before restarting the effect
          }
      }

      typeWriter();
  });
});

document.addEventListener("DOMContentLoaded", function() {
  function setAnimation() {
    const typewriterElements = document.querySelectorAll('.typewriter');
    const isMobile = window.innerWidth <= 768; // Define mobile breakpoint

    typewriterElements.forEach(element => {
      if (isMobile) {
        element.style.animationIterationCount = '1'; // Run once on mobile
      } else {
        element.style.animationIterationCount = 'infinite'; // Run infinitely on desktop
      }
    });
  }

  // Set animation on load
  setAnimation();

  // Update animation on window resize
  window.addEventListener('resize', setAnimation);
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
  loop: true,
  margin: 0,
  dots: false,
  nav: true,
  navText: [],
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
      '<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'
  ],
  responsive: {
      0: {
          items: 1
      },
      600: {
          items: 1
      },
      1000: {
          items: 2
      }
  }
});

/** google_map js **/
function myMap() {
  var mapProp = {
      center: new google.maps.LatLng(40.712775, -74.005973),
      zoom: 18,
  };
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}


$(document).ready(function() {
  // Example: Fade in elements on scroll
  $(window).scroll(function() {
    $('.service_item').each(function() {
      var elementTop = $(this).offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();
      if (elementTop < windowBottom) {
        $(this).animate({'opacity': '1'}, 1000);
      }
    });
  });

  // Toggle dropdown menu on click
  $('#servicesDropdown').on('click', function(e) {
    e.preventDefault(); // Prevent default anchor click behavior
    $(this).next('.dropdown-menu').toggle(); // Toggle the dropdown menu
  });
});


  // document.addEventListener('DOMContentLoaded', function() {
  //   const navbarToggler = document.querySelector('.navbar-toggler');
  //   const navbarCollapse = document.querySelector('.navbar-collapse');
  //   const body = document.body;

  //   navbarToggler.addEventListener('click', function() {
  //     if (navbarCollapse.classList.contains('show')) {
  //       body.classList.remove('blur-background');
  //     } else {
  //       body.classList.add('blur-background');
  //     }
  //   });

  //   // Remove blur when clicking outside the menu
  //   document.addEventListener('click', function(event) {
  //     if (!navbarCollapse.contains(event.target) && !navbarToggler.contains(event.target)) {
  //       body.classList.remove('blur-background');
  //     }
  //   });
  // });

  // <script>
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    var navbar = document.querySelector(".navbar");
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    var brandSpan = document.querySelector(".navbar-brand span");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Light background
      navbar.style.color = "#333"; // Dark text color
      navLinks.forEach(link => link.style.color = "#1fab89"); // Dark text color for links
      brandSpan.style.color = "#1fab89"; // Dark text color for brand
    } else {
      navbar.style.backgroundColor = "transparent"; // Transparent background
      navbar.style.color = "#fff"; // White text color
      navLinks.forEach(link => link.style.color = "#fff"); // White text color for links
      brandSpan.style.color = "#fff"; // White text color for brand
    }
  }


window.onscroll = function () { scrollFunction(); };

  function scrollFunction() {
    var navbar = document.querySelector(".navbar");
    var navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    var brandSpan = document.querySelector(".navbar-brand span");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)"; // Light background
      navbar.style.color = "#333"; // Dark text color
      navLinks.forEach(link => {
        link.style.color = "#1fab89"; // Dark text color for links
        link.style.borderBottom = "2px solid transparent"; // Default underline
        link.addEventListener('mouseover', function () {
          this.style.borderBottom = "2px solid #1fab89"; // Underline on hover
        });
        link.addEventListener('mouseout', function () {
          this.style.borderBottom = "2px solid transparent"; // Remove underline
        });
      });
      brandSpan.style.color = "#1fab89"; // Dark text color for brand
    } else {
      navbar.style.backgroundColor = "transparent"; // Transparent background
      navbar.style.color = "#fff"; // White text color
      navLinks.forEach(link => {
        link.style.color = "#fff"; // White text color for links
        link.style.borderBottom = "2px solid transparent"; // Default underline
        link.addEventListener('mouseover', function () {
          this.style.borderBottom = "2px solid whitesmoke"; // Underline on hover
        });
        link.addEventListener('mouseout', function () {
          this.style.borderBottom = "2px solid transparent"; // Remove underline
        });
      });
      brandSpan.style.color = "#fff"; // White text color for brand
    }
  }
  window.addEventListener('scroll', function() {
    const navContainer = document.querySelector('.custom_nav-container');
    if (window.scrollY > 50) {
      navContainer.classList.add('scrolled');
    } else {
      navContainer.classList.remove('scrolled');
    }
  });
