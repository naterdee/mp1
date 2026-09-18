/* Your JS here. */

const navButtons = document.querySelectorAll('.navbar a.buttons');
const sections = document.querySelectorAll('.top, .projects, .contact');
const navBar = document.querySelector('.navbar');

function scrollUpdate() {
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

if (window.scrollY > 80) {
    navBar.style.height = "30px";
    navButtons.forEach((button) => {
        button.style.fontSize = "15px";
    });
} else {
    navBar.style.height = "80px";
    navButtons.forEach((button) => {
        button.style.fontSize = "30px";
    }); 
}
}

// Listeners
window.addEventListener('scroll', scrollUpdate);
document.addEventListener('DOMContentLoaded', updateActiveNav);
