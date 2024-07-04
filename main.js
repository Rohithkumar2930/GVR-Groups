/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/* Menu show */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

jQuery(document).ready(function ($) {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

// ------map-----

function initMap() {
    // The location of your business or desired location
    var location = { lat: 40.7128, lng: -74.0060 }; // Example: New York City coordinates

    // The map, centered at your location
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location,
    });

    // The marker, positioned at your location
    var marker = new google.maps.Marker({
        position: location,
        map: map,
    });
}