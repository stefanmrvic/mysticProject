const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener('click', toggleHamburgerMenu);

function toggleHamburgerMenu() {
    nav.classList.toggle("active");
}