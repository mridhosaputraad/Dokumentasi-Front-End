// Sidenav
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

// Slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});

// Clients
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);