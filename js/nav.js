const NavBurger = document.querySelector("nav div.burger");
const NavbarCollapse = document.querySelector("nav div.navbar-collapse");

function HandleButtonEvents() {
    NavBurger.onclick = function() {
        NavBurger.classList.toggle("open");
        NavbarCollapse.classList.toggle("collapse");
    }
}

window.onload = HandleButtonEvents;