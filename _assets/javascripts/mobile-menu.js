// MOBILE MENU
// -----------------------------------------
// Shows the mobile menu when you click on
// the hamburger icon.
// -----------------------------------------

var mobileMenuButton = document.getElementById('nav-icon');
var mobileMenu = document.getElementById('sidebar');

function mobileMenuToggle() {
  mobileMenuButton.classList.toggle('js-menu-is-open');
  mobileMenu.classList.toggle('js-menu-is-open');
}

mobileMenuButton.addEventListener("click", mobileMenuToggle);
