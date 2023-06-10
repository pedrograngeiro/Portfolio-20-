const openModalBtns = document.querySelectorAll(".open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector("#modal .close");

openModalBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
