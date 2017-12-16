// MOBILE MENU
// -----------------------------------------
// Shows the mobile menu when you click on
// the hamburger icon.
// -----------------------------------------

var mobileMenuButton = document.getElementById('nav-icon');
var mobileMenu = document.getElementById('sidebar');
var mobileHeader = document.getElementById('header');
var mobileContent = document.getElementById('main-content');


function mobileMenuToggle() {
  mobileMenuButton.classList.toggle('js-menu-is-open');
  mobileMenu.classList.toggle('js-menu-is-open');
  mobileHeader.classList.toggle('js-menu-is-open');

  if ( mobileHeader.classList.contains('js-menu-is-open') ) {
    mobileContent.style.paddingTop = 'calc(3rem + 51.8px)';
  } else {
    mobileContent.style.paddingTop = null;
  }
}

mobileMenuButton.addEventListener("click", mobileMenuToggle);
