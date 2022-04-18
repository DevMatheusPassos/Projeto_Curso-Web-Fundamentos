let year = document.querySelector("#year");
let date = new Date();

year.textContent = date.getFullYear();

function showMenu() {
    let menuButton = document.querySelector(".menu__button");

    menuButton.classList.toggle("--menuOpen");
}