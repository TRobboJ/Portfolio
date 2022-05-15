const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-btn");
const closeModal = document.querySelector(".close-btn");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
