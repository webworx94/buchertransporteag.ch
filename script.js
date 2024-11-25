const menuBtn = document.getElementById('menu-btn');
const cancelBtn = document.getElementById('cancel-btn');
const header = document.getElementById('header');
const dropdownNav = document.querySelector('.dropdown-nav');
const dropBtn = document.querySelector('.seconddrop');
const dropStopBtn = document.querySelector('.secondcancel');
let isMenuOpen = false;

// Menu-Button Eventlistener
menuBtn.addEventListener('click', function () {
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'block';
    header.style.top = '0';
    isMenuOpen = true;
});

// Cancel-Button Eventlistener
cancelBtn.addEventListener('click', function () {
    menuBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    header.style.top = '-100%';
    isMenuOpen = false;

    // Reset dropdown state
    dropdownNav.style.opacity = '0'; // Hide dropdown
    dropBtn.style.display = 'inline-block'; // Show dropdown button
    dropStopBtn.style.display = 'none'; // Hide cancel button for dropdown
});

// Dropdown-Button Eventlistener
dropBtn.addEventListener('click', () => {
    isMenuOpen = true;
    dropdownNav.style.opacity = '1.0'; // Show dropdown
    dropBtn.style.display = 'none'; // Hide dropdown button
    dropStopBtn.style.display = 'inline-block'; // Show cancel button for dropdown
});

// Dropdown Cancel-Button Eventlistener
dropStopBtn.addEventListener('click', () => {
    isMenuOpen = true;
    dropdownNav.style.opacity = '0'; // Hide dropdown
    dropBtn.style.display = 'inline-block'; // Show dropdown button
    dropStopBtn.style.display = 'none'; // Hide cancel button for dropdown
});

// Reset on Window Resize
window.addEventListener('resize', function () {
    if (window.innerWidth > 1100) {
        // Reset header and menu buttons for large screens
        cancelBtn.style.display = 'none';
        menuBtn.style.display = 'none';
        header.style.top = '0';
        isMenuOpen = false;

        // Ensure dropdown is reset
        dropdownNav.style.opacity = '0'; // Hide dropdown
        dropBtn.style.display = 'inline-block'; // Show dropdown button
        dropStopBtn.style.display = 'none'; // Hide cancel button for dropdown
    } else {
        // Reset menu buttons and header for small screens if menu is closed
        if (!isMenuOpen) {
            menuBtn.style.display = 'block';
            header.style.top = '-100%';
        }
    }
});
