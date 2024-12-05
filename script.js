const menuBtn = document.getElementById('menu-btn');
const cancelBtn = document.getElementById('cancel-btn');
const header = document.getElementById('header');
const dropdownNav = document.querySelector('.dropdown-nav');
const dropBtn = document.querySelector('.seconddrop');
const dropStopBtn = document.querySelector('.secondcancel');
const bothDropBtn = document.querySelector('.dropbtn');
let isMenuOpen = false;

// Funktion zum Zurücksetzen des Dropdown-Zustands
function resetDropdown() {
    dropdownNav.style.opacity = '0'; // Verstecke Dropdown
    dropBtn.style.display = 'inline-block'; // Zeige Dropdown-Button
    dropStopBtn.style.display = 'none'; // Verstecke Cancel-Button für Dropdown
}

// Menu-Button Eventlistener
menuBtn.addEventListener('click', function () {
    menuBtn.style.display = 'none';
    cancelBtn.style.display = 'block';
    header.style.top = '0';
    isMenuOpen = true;

    // Stelle sicher, dass Dropdown im Anfangszustand ist
    resetDropdown();
});

// Cancel-Button Eventlistener
cancelBtn.addEventListener('click', function () {
    menuBtn.style.display = 'block';
    cancelBtn.style.display = 'none';
    header.style.top = '-100%';
    isMenuOpen = false;

    // Setze Dropdown-Zustand zurück
    resetDropdown();
});

// Dropdown-Button Eventlistener
dropBtn.addEventListener('click', () => {
    isMenuOpen = true;
    dropdownNav.style.opacity = '1.0'; // Zeige Dropdown
    dropBtn.style.display = 'none'; // Verstecke Dropdown-Button
    dropStopBtn.style.display = 'inline-block'; // Zeige Cancel-Button für Dropdown
});

// Dropdown Cancel-Button Eventlistener
dropStopBtn.addEventListener('click', () => {
    isMenuOpen = true;
    dropdownNav.style.opacity = '0'; // Verstecke Dropdown
    dropBtn.style.display = 'inline-block'; // Zeige Dropdown-Button
    dropStopBtn.style.display = 'none'; // Verstecke Cancel-Button für Dropdown
});

// Reset on Window Resize
window.addEventListener('resize', function () {
    if (window.innerWidth > 1100) {
        // Reset header and menu buttons for large screens
        cancelBtn.style.display = 'none';
        menuBtn.style.display = 'none';
        header.style.top = '0';
        bothDropBtn.style.display = 'none';
        isMenuOpen = false;

        // Ensure dropdown is reset
        dropdownNav.style.opacity = '1.0'; // Zeige Dropdown auf großen Bildschirmen
        
    } else {
        // Reset menu buttons and header for small screens if menu is closed
        if (!isMenuOpen) {
            menuBtn.style.display = 'block';
            header.style.top = '-100%';
        }
    }
});


// Nur NR annehmen im Formular Telefonnummer
const telInput = document.getElementById('tel')

telInput.addEventListener('input', () => {
    telInput.value = telInput.value.replace(/[^0-9]/g, '');
})


// GALLERIE


