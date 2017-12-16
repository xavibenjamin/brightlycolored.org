// TAG LIST
// -----------------------------------------
// Shows the complete list of topics when
// a button is clicked.
// -----------------------------------------

var tagList = document.querySelector('.tag-list');
var tagButton = document.getElementById('tag-list-toggle');

function tagListReveal() {
  tagList.classList.add('js-is-open');
  tagButton.remove();
}

if ( tagButton ) {
  tagButton.addEventListener("click", tagListReveal);
}

