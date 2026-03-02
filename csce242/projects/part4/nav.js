const toggleNav = () => {
  const nav = document.querySelector(".nav");
  if (nav) nav.classList.toggle("open");
};

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".nav-toggle");
  if (btn) btn.addEventListener("click", toggleNav);
});