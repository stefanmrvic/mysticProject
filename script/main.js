const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");
const navMenu = document.getElementById("menu");

hamburger.addEventListener('click', toggleHamburgerMenu);
navMenu.addEventListener("click", toggleSubmenu);

function toggleHamburgerMenu() {
    nav.classList.toggle("active");
}

function toggleSubmenu(e) {
    const submenu = e.target.closest(".submenu-category");
    if (!submenu) return;
    // It uses bubbling to create event delegation from parent element to child elements,
    // to avoid using forEach to attach eventListener to all child elements, thus saving memory
    submenu.classList.toggle("active");
}