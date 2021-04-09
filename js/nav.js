const NavBurger = document.querySelector("nav div.burger");
const NavbarCollapse = document.querySelector("nav div.navbar-collapse");

function HandleNavButtonEvents() {

    NavBurger.onclick = function() {
        NavBurger.classList.toggle("open");
        NavbarCollapse.classList.toggle("collapse");
    }
}

window.addEventListener('load', HandleNavButtonEvents);