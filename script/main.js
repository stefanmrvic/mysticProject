const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.menu');
// Using spread here so I can use array method .includes() to check if any of the active elements
// are the currently clicked submenu.
let activeElements = [...document.querySelectorAll('li.active')];

hamburger.addEventListener('click', toggleHamburgerMenu);
// It uses bubbling to create event delegation from parent element to child elements,
// to avoid using forEach to attach eventListener to all child elements, thus saving memory.
navMenu.addEventListener('click', toggleSubmenu);

function toggleHamburgerMenu() {
    nav.classList.toggle('active');

    // Removes white color from any active items when nav is being closed.
    if (activeElements.length > 0) {
        activeElements.forEach(el => el.classList.remove('active'));
    }
}

function toggleSubmenu(e) {
    // Selects the parent of the currently clicked element (which is usually <a> or <i>) so I need to use .closest()
    // in order to select the <li> element on which I attach .active class which changes the color of the <li> 
    // and it expands the submenu below to display additional items/elements.
    const submenu = e.target.closest('.submenu-category');

    // Updates the nodeList whenever the item in <nav> is being clicked, so that the new active items can be detected 
    // within the toggleHamburgerMenu() function.
    activeElements = [...document.querySelectorAll('li.active')];

    // Defining it as undefined to avoid errors in the console saying that element with the class "submenu-2" doesn't exist.
    const nestedSubmenu = e.target.closest('.submenu-category.sub-2') ? true : false;

    // If the currently clicked element is not the child of the nav's <li>, it exits the func call. Guard Clause, wooooo, #iq300 prodigy
    if (!submenu) return;

    if (
        e.target.nodeName !== 'LI' &&
        e.target.nodeName !== 'A' &&
        e.target.nodeName !== 'I'
    ) {
        return;
    }

    // It checks if the clicked <li> is not second-layer submenu and it checks if the element with class "active" exists.
    // This is because we don't want to remove "active" class from the parent of second-layer submenu, because it would close it.
    // If it finds the element that is not a second-layer submenu, with class"active" in it, it deletes it.
    if (!nestedSubmenu && activeElements.length > 0) {
        activeElements.forEach(el => el.classList.remove('active'));

        // If the current submenu is also the activeElement, then the code above will remove the white color of <li>,
        // and this code below will add white color to the clicked <li>, meaning that the state will remain the same.
        if (!activeElements.includes(submenu)) {
            submenu.classList.toggle('active');
        }

    } else {
        submenu.classList.toggle('active');
    }
}