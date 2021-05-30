/* 
-----------------------------------
SHOWCASE SLIDESHOW
-----------------------------------
*/
const slideShow = document.querySelector(".hero__slides");
// console.log(slideShow);
const slides = Array.from(slideShow.children);
// console.log(slides);

const slideShowText = document.querySelector("#slide__text");
const slideText = slideShowText.getElementsByTagName("div");

const nextSlideBtn = document.querySelector(".hero__control--right");
const prevSlideBtn = document.querySelector(".hero__control--left");

let currentSlide = 0;

const nextSlide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
};

const prevSlide = () => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
};

let currentText = 0;
const nextText = () => {
  slideText[currentText].classList.remove("active");
  currentText = (currentText + 1) % slideText.length;
  slideText[currentText].classList.add("active");
};

const prevText = () => {
  slideText[currentText].classList.remove("active");
  currentText = (currentText - 1 + slideText.length) % slideText.length;
  slideText[currentText].classList.add("active");
};

nextSlideBtn.addEventListener("click", () => {
  nextSlide();
  nextText();
});

prevSlideBtn.addEventListener("click", () => {
  prevSlide();
  prevText();
});
