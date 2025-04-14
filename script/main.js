const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navMenu = document.querySelector('.menu');

hamburger.addEventListener('click', toggleHamburgerMenu);
// It uses bubbling to create event delegation from parent element to child elements,
// to avoid using forEach to attach eventListener to all child elements, thus saving memory.
navMenu.addEventListener('click', toggleSubmenu);
body.addEventListener('click', closeSubmenu);

function toggleHamburgerMenu() {
    nav.classList.toggle('active');
    toggleAriaExpanded(hamburger);

    const activeElements = document.querySelectorAll('li.active');

    // Removes white color from any active items when nav is being closed.
    if (activeElements.length > 0) {
        activeElements.forEach(el => el.classList.remove('active'));
    }
}

function toggleSubmenu(e) {
    // Selects the parent of the currently clicked element (which is usually <a> or <i>) so I need to use .closest()
    // in order to select the <li> element on which I attach .active class which changes the color of the <li> 
    // and it expands the submenu below to display additional items/elements.
    const submenuParent = e.target.closest('.submenu-category');

    // If the currently clicked element is not the child of the nav's <li>, it exits the func call. Guard Clause, wooooo, #iq300 prodigy
    if (!submenuParent) return;
    
    const submenu = submenuParent.querySelector(':scope > ul.submenu');
    const submenuLink = submenuParent.querySelector(':scope > a'); 
    
    toggleAriaHidden(submenu);
    toggleAriaExpanded(submenuLink);

    // Checks if the clicked element is part of a second-level submenu
    const nestedSubmenu = e.target.closest('.submenu-category.sub-2') ? true : false;

    // Using spread here to convert nodeList into an array, so I can use array method .includes() to check if any of the active elements
    // are the currently clicked submenu.
    const activeElements = [...document.querySelectorAll('li.active')];

    // It checks if the clicked <li> is not second-layer submenu and it checks if the element with class "active" exists.
    // This is because we don't want to remove "active" class from the parent of second-layer submenu, because it would close it.
    // If it finds the element that is not a second-layer submenu, with class"active" in it, it deletes it.
    if (!nestedSubmenu && activeElements.length > 0) {
        activeElements.forEach(el => el.classList.remove('active'));

        // If the current submenu is also the activeElement, then the code above will remove the white color of <li>,
        // and this code below will add white color to the clicked <li>, meaning that the state will remain the same.
        if (!activeElements.includes(submenuParent)) {
            submenuParent.classList.toggle('active');
        }

    } else {
        submenuParent.classList.toggle('active');
    }
}

function closeSubmenu(e) {
    console.log(e.target.nodeName);
    const activeElements = document.querySelectorAll('li.active');

    if (
        e.target.nodeName !== 'LI' &&
        e.target.nodeName !== 'A' &&
        e.target.nodeName !== 'I' &&
        activeElements.length > 0
    ) {
        activeElements.forEach(el => el.classList.remove('active'));
    }  
}

// Creating my first helper function without any Googling or ChatGPTing //
function toggleAriaExpanded(el) {
    const ariaExpanded = el.getAttribute('aria-expanded');

    if (ariaExpanded === "true") {
        el.setAttribute('aria-expanded', 'false');
    } else {
        el.setAttribute('aria-expanded', 'true');
    }
}
// It worked without an error in first try!! WOOOOOO //


// My second helper function for ARIA attribute, because I don't want to toggle ON/OFF all ARIA attributes in one function //
function toggleAriaHidden(el) {
    const ariaHidden = el.getAttribute('aria-hidden');

    if (ariaHidden === "true") {
        el.setAttribute('aria-hidden', 'false');
    } else {
        el.setAttribute('aria-hidden', 'true');
    }
    // When I was curious if ChatGPT can "optimize" this logic, he proposed to optimize it like this:
    // el.setAttribute('aria-hidden', ariaHidden === 'true' ? 'false' : 'true');
    // But to me it looked obscure because it's using ternary operator inside of a setAttribute method...
    // What's your opinion on this "optimization"? 
}