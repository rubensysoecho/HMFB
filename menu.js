const burgerButton = document.querySelector(".d-menu");
const menuElement = document.querySelector('.menu');

function toggleMenu() {
    menuElement.classList.toggle("menu_active");
}

burgerButton.addEventListener("click", toggleMenu);