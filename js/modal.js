/* 
-----------------------------------
MODAL
-----------------------------------
*/
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".btn--open-modal");

const openModal = () => (modal.style.display = "block");
// const closeModal = () => (modal.style.display = "none");
const closeModalOutsideClick = (e) => {
  if (e.target === modal) modal.style.display = "none";
};

modalBtn.addEventListener("click", openModal);
window.addEventListener("click", closeModalOutsideClick);
