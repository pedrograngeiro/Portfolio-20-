const openModalBtn = document.getElementById("open-modal");
const modal = document.getElementById("modal");
const closeModalBtn = document.getElementsByClassName("close")[0];

openModalBtn.addEventListener("click", () => {
  modal.style.display = "block";
});

closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});
