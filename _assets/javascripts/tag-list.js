// TAG LIST
// -----------------------------------------
// Shows the complete list of topics when
// a button is clicked.
// -----------------------------------------

var tagList = document.querySelector('.tag-list');
var button = document.getElementById('tag-list-toggle');

function tagListReveal() {
  tagList.classList.add('js-is-open');
  button.remove();
}

button.addEventListener("click", tagListReveal);
