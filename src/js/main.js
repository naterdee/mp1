/* Your JS here. */

const navButtons = document.querySelectorAll('.navbar a.buttons');
const sections = document.querySelectorAll('.top, .projects, .contact');
const navBar = document.querySelector('.navbar');
const name = document.querySelector('.navbar a.name');
const right = document.querySelector('.next');
const left = document.querySelector('.prev');

const slides = document.querySelectorAll('.mySlides');
const dots = document.querySelectorAll('.dot');

let slideNum = 1;
showSlides(slideNum);



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
            button.style.padding = "5px";
        });
        name.style.fontSize = "20px";
    } else {
        navBar.style.height = "80px";
        navButtons.forEach((button) => {
            button.style.fontSize = "30px";
            button.style.padding = "10px";
        }); 
        name.style.fontSize = "40px";
    }
}

// Next/previous controls
right.addEventListener('click', () => showSlides(slideNum + 1));
left.addEventListener('click', () => showSlides(slideNum - 1));


// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideNum = n);
}

function showSlides(n) {
  let i;
  if (n > slides.length) {n = 1}
  if (n < 1) {n = slides.length}
  slideNum = n;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideNum-1].style.display = "block";
  dots[slideNum-1].className += " active";
}

// Listeners
window.addEventListener('scroll', scrollUpdate);
scrollUpdate();



