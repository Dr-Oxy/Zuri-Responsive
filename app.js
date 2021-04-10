//select elements
const openIcon = document.querySelector(".lni-menu");
const closeIcon = document.querySelector(".lni-close");
const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelector(".nav-links");

openIcon.addEventListener("click", () => {
  navLinks.classList.add("open");
  openIcon.style.display = "none";
  closeIcon.style.display = "block";
});

closeIcon.addEventListener("click", () => {
  navLinks.classList.remove("open");
  closeIcon.style.display = "none";
  openIcon.style.display = "block";
});
