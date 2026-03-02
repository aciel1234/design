/* ===== BARRA DE PROGRESO ===== */
const progressBarEl = document.getElementById('progress-bar');
window.addEventListener('scroll', () => {
  let height = document.body.scrollHeight - window.innerHeight;
  let scrollPosition = document.documentElement.scrollTop;
  let width = (scrollPosition / height) * 100;
  progressBarEl.style.width = `${width}%`;
})

/* ===== ANIMACION POR SCROLL ===== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
const opacityElements = document.querySelectorAll('.opacity');
const hiddenRightElements = document.querySelectorAll('.right-hidden');
const hiddenLeftElements = document.querySelectorAll('.left-hidden');
const hiddenBackElements = document.querySelectorAll('.back-hidden');
const bottomElements = document.querySelectorAll('.bottom-hidden');
hiddenLeftElements.forEach((el) => observer.observe(el));
hiddenElements.forEach((el) => observer.observe(el));
opacityElements.forEach((el) => observer.observe(el));
hiddenRightElements.forEach((el) => observer.observe(el));
hiddenBackElements.forEach((el) => observer.observe(el));
bottomElements.forEach((el) => observer.observe(el));

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});