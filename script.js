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
const telInput = document.getElementById('tel');
if (telInput) { // Prüfen, ob das Element existiert
    console.log("Input-Feld für Telefonnummer gefunden, Event-Listener wird hinzugefügt.");
    telInput.addEventListener('input', () => {
        telInput.value = telInput.value.replace(/[^0-9]/g, '');
        console.log("Eingabe gefiltert, aktueller Wert:", telInput.value);
    });
} else {
    console.log("Kein Input-Feld für Telefonnummer auf dieser Seite vorhanden.");
};

// GALLERIE
document.addEventListener("DOMContentLoaded", () => {
    // Überprüfen, ob das Element #gallery vorhanden ist
    const gallery = document.getElementById("gallerie");
    if (!gallery) {
        console.log("Keine Galerie auf dieser Seite vorhanden.");
        return; // Skript wird beendet, wenn #gallery nicht existiert
    }

    // Alle wichtigen Elemente auswählen
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const overlay = document.getElementById("overlay");
    const overlayImage = document.getElementById("overlay-image");
    const closeBtn = document.getElementById("close-btn");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentIndex = 0; // Index des aktuellen Bildes

    // Funktion, um das Overlay zu öffnen
    const openOverlay = (index) => {
        currentIndex = index;
        const imgSrc = galleryItems[currentIndex].getAttribute("src");
        overlayImage.setAttribute("src", imgSrc);
        overlay.style.display = "flex";
        requestAnimationFrame(() => overlay.classList.add("show"));
    };

    // Funktion, um das Overlay zu schließen
    const closeOverlay = () => {
        overlay.classList.remove("show");
        setTimeout(() => {
            overlay.style.display = "none";
        }, 500); // Animation abwarten (CSS Transition-Dauer)
    };

    // Funktion, um zum vorherigen Bild zu wechseln
    const showPrevImage = () => {
        currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
        const imgSrc = galleryItems[currentIndex].getAttribute("src");
        overlayImage.setAttribute("src", imgSrc);
    };

    // Funktion, um zum nächsten Bild zu wechseln
    const showNextImage = () => {
        currentIndex = (currentIndex + 1) % galleryItems.length;
        const imgSrc = galleryItems[currentIndex].getAttribute("src");
        overlayImage.setAttribute("src", imgSrc);
    };

    // Event Listener für die Bilder in der Galerie
    galleryItems.forEach((img, index) => {
        img.addEventListener("click", () => openOverlay(index));
    });

    // Event Listener für die Buttons im Overlay
    closeBtn.addEventListener("click", closeOverlay);
    prevBtn.addEventListener("click", showPrevImage);
    nextBtn.addEventListener("click", showNextImage);

    // Overlay schließen, wenn man außerhalb des Bildes klickt
    overlay.addEventListener("click", (event) => {
        if (event.target === overlay) closeOverlay();
    });

    // Event Listener für die Tastatur
    document.addEventListener("keydown", (event) => {
        if (!overlay.classList.contains("show")) return;
        switch (event.key) {
            case "ArrowLeft":
                showPrevImage();
                break;
            case "ArrowRight":
                showNextImage();
                break;
            case "Escape":
                closeOverlay();
                break;
        }
    });
});


// TIMELINE
(function () {
    "use strict";
  
    // define variables
    var items = document.querySelectorAll(".timeline li");
  
    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        var viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      
        return (
          rect.top <= viewportHeight * 0.7 && // Element tritt später ein, bei 80% der Höhe
          rect.bottom >= viewportHeight * 0.2 // Element bleibt sichtbar, solange mindestens 20% im Viewport sind
        );
      }
  
    function callbackFunc() {
      for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
          items[i].classList.add("in-view");
        }
      }
    }
  
    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);
  })();
  