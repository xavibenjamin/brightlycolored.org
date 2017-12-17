var $doc            = $(document),
    $search_input   = $('#search-query'),
    $search_popover = $('.popover--search');

$search_input.on('keyup', function() {
  $search_popover.addClass('is-open');
  $doc.bind('focusin.popover click.popover',function(e) {
    if ($(e.target).closest('.popover, #search-query').length) return;
    $doc.unbind('.popover');
    $search_popover.removeClass('is-open');
  });
});

var searchButton = document.getElementById('search-input-toggle');
var searchForm = document.getElementById('search');
var searchInput = document.getElementById('search-query');

if (searchButton) {
  searchButton.addEventListener("click", toggleSearchForm);
}

function toggleSearchForm() {
  searchForm.classList.toggle('js-search-is-open');

  if ( searchForm.classList.contains('js-search-is-open')) {
    searchInput.focus();
  } else {
    searchInput.value = '';
    searchInput.blur();
  }
}
