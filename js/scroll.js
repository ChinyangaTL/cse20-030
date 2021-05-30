/* 
-----------------------------------
SCROLL INDICATOR
-----------------------------------
*/
const scrollIndicator = document.querySelector(".scroll-down");
const scrollIndicatorMobile = document.querySelector(".scroll-down--mobile");

scrollIndicator.style.opacity = 0;
scrollIndicatorMobile.style.opacity = 0;

setTimeout(() => {
  scrollIndicator.style.opacity = 1;
  scrollIndicatorMobile.style.opacity = 1;
}, 7000);

// const cardGrid = document.querySelector(".container.grid");
// console.log(cardGrid);

// const handleTabletMedia = () => {
//   window.innerWidth <= 768
//     ? (cardGrid.classList = "container grid--1")
//     : (cardGrid.classList = "container grid");
// };
// handleTabletMedia();

// console.log(cardGrid);
