/*
 * This is the main entry point for Webpack, the compiler & dependency loader.
 * All files that are necessary for your web page and need to be 'watched' for changes should be included here!
 */

// HTML Files
import './index.html';

// Stylesheets
import './css/main.scss';

// Scripts
import './js/main.js';

const navButtons = document.querySelectorAll('.navbar a.buttons');
const sections = document.querySelectorAll('.top, .projects, .contact');

function updateActiveNav() {
  let currentSectionId = '';

  sections.forEach((section) => {
    // Get the distance of each section
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= 150) {
      currentSectionId = section.getAttribute('id');
    }
  });

  // Sets button's active status
  navButtons.forEach((button) => {
    button.classList.remove('active');
    if (button.getAttribute('href') === `#${currentSectionId}`) {
      button.classList.add('active');
    }
  });
}

// Listeners
window.addEventListener('scroll', updateActiveNav);
document.addEventListener('DOMContentLoaded', updateActiveNav);
