const hamburger = document.getElementById("hamburger");
const close = document.getElementById("close");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
    nav.classList.add('full-nav');
})
close.addEventListener("click", () => {
    nav.classList.remove('full-nav');
})