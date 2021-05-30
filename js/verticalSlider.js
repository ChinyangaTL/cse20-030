/* 
-----------------------------------
VERTICAL SLIDER
-----------------------------------
*/

const sliderContainer = document.querySelector(".container--slider");
const slideRight = document.querySelector(".slide--right");
const slideLeft = document.querySelector(".slide--left");
const upButton = document.querySelector(".button--up");
const downButton = document.querySelector(".button--down");
const slidesLength = slideRight.querySelectorAll("div").length;

// console.log(slidesLength);

let activeSlideIndex = 0;

// console.log(slideLeft);

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;
  //   console.log(sliderHeight);
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
};
