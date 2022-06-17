const base = document.querySelector(".base");
const bar = document.querySelector(".bar");

base.addEventListener("click", () => {
  bar.classList.toggle("active");
});
