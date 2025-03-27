const hamburger = document.getElementById("hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener('click', toggleHamburgerMenu);

function toggleHamburgerMenu() {
    nav.classList.toggle("active");
}

const submenuParentItems = document.querySelectorAll(".submenu-category");

submenuParentItems.forEach(submenuParentItem => {
    submenuParentItem.addEventListener("click", toggleSubmenu);
})

function toggleSubmenu(e) {
    // Prevents bubbling for "Web Development" submenu under "Services" submenu, 
    // and thus preventing instant collapsing of "Web Development" submenu
    e.stopPropagation();

    e.currentTarget.classList.toggle("active");
}