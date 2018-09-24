// Group LIST
// -----------------------------------------
// Shows the complete list of groups when
// a button is clicked.
// -----------------------------------------

var groupList = document.querySelector('.groups-list--space-saver');
var groupButton = document.getElementById('groups-list-toggle');

function groupListReveal() {
  groupList.classList.add('js-is-open');
  groupButton.remove();
}

if ( groupButton ) {
  groupButton.addEventListener("click", groupListReveal);
}

