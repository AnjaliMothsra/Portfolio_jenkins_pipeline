document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  fadeEls.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.25}s`;
  });
});
