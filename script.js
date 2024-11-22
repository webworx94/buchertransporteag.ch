const menuBtn = document.getElementById('menu-btn')
const cancelBtn = document.getElementById('cancel-btn')
const header = document.getElementById('header')
const dropdownNav = document.querySelector('.dropdown-nav')
let isMenuOpen = false;

// Menu-Button Eventlistener
menuBtn.addEventListener('click', function() {
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'block';
    header.style.top = '0';
    dropdownNav.style.display = 'block';
    isMenuOpen = true;
})

// Cancel-Button Eventlistener
cancelBtn.addEventListener('click', function() {
    menuBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    header.style.top = '-100%';
    dropdownNav.style.display = 'none';
    isMenuOpen = false;
})

// Reset 
window.addEventListener('resize', function() {
    if (window.innerWidth > 1100) {
        cancelBtn.style.display = 'none';
        menuBtn.style.display = 'none';
        header.style.top = '0'
        isMenuOpen = false;
    } else {
        if (!isMenuOpen) {
            menuBtn.style.display = 'block';
            header.style.top = '-100%';
        }
    }
})