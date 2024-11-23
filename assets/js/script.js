'use strict';


document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('.hero-image');
  const titles = document.querySelectorAll('.hero-title');
  let currentImageIndex = 0;

  function showImage(index) {
    images.forEach((image, i) => {
      image.style.opacity = i === index ? 1 : 0;
      // Apply zoom effect only on the active image
      if (i === index) {
        image.classList.add('zoom-in-out');
        titles[i].style.opacity = 1;
        titles[i].style.transform = 'translate(-50%, -50%) translateY(0)';
      } else {
        image.classList.remove('zoom-in-out');
        titles[i].style.opacity = 0;
        titles[i].style.transform = 'translate(-50%, -50%) translateY(100px)';
      }
    });
  }

  // Set the images and titles in sequence with timing
  function cycleImages() {
    showImage(currentImageIndex);
    currentImageIndex = (currentImageIndex + 1) % images.length;
  }

  // Initial display
  showImage(currentImageIndex);

  // Change images every 4 seconds
  setInterval(cycleImages, 4000);
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  
  const startCounting = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / 200;

      const updateCounter = () => {
        count += increment;
        if (count <= target) {
          counter.textContent = Math.ceil(count);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target;
        }
      };
      updateCounter();
    });
  };

  // Observer to trigger animation when the section is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
      }
    });
  }, { threshold: 0.5 });

  observer.observe(document.querySelector('.why-choose-container'));
});






/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

document.addEventListener("scroll", function () {
  const heroSection = document.querySelector(".hero");
  const whatsappButton = document.getElementById("whatsapp-button");

  if (window.scrollY > heroSection.offsetHeight) {
    whatsappButton.style.display = "block";
  } else {
    whatsappButton.style.display = "none";
  }
});
