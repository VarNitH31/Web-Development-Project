// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("carousel_slide");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("carousel_slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

setInterval(() => {
  plusSlides(1);
}, 3000);


let currentCarouselIndex = 0;
const carouselSlides = document.querySelector('.carousel-slides');

function displayCarouselSlides() {
    carouselSlides.style.transform = `translateX(${-currentCarouselIndex * 100}%)`;
}

function nextCarousel() {
    currentCarouselIndex = (currentCarouselIndex + 1) % 4; // 4 is the number of slides
    displayCarouselSlides();
}

function prevCarousel() {
    currentCarouselIndex = (currentCarouselIndex - 1 + 4) % 4; // 4 is the number of slides
    displayCarouselSlides();
}