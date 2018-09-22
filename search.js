---
---

// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

{% assign count = 0 %}{% for post in site.posts %}
index.add({
  title: {{post.title | jsonify}},
  category: {{post.categories | jsonify}},
  content: {{post.content | strip_html | jsonify}},
  tags: {{post.tags | jsonify}},
  id: {{count}}
});{% assign count = count | plus: 1 %}{% endfor %}
console.log( jQuery.type(index) );
// builds reference data
var store = [{% for post in site.posts %}{
  "title": {{post.title | jsonify}},
  "link": {{ post.url | jsonify }},
  "date": {{ post.date | date: '%a, %b %d, %Y' | jsonify }},
  "category": {{ post.category | jsonify }}
}{% unless forloop.last %},{% endunless %}{% endfor %}]
// builds search

jQuery(document).ready(function() {
  var $search_input = $('#search-query'),
      resultdiv     = $('#results'),
      $search_query = $search_input.val();

  var searchCallback = function() {
    // Get query
    var $search_query = $(this).val();
    // Search for it
    var result = index.search($search_query);
    // Show results
    resultdiv.empty();
    // Add status
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<h3><a href="' + store[ref].link + '" class="post-title"><small class="pubdate">' + store[ref].date +'</small>'+store[ref].title+'</a></h3>';
      resultdiv.append(searchitem);
    }

    if (result.length == 0 && $search_query) {
      resultdiv.append('<p>Sorry, nothing matches that search.</p>');
    }
    else if (result.length == 0 && !$search_query) {
      resultdiv.append('<p class="light-text">Nothing to show yet. The world is your oyster.');
    }
  };

  if (!$search_query) {
    resultdiv.append('<p class="light-text">Nothing to show yet. The world is your oyster.');
  }

  $search_input.on('keyup', searchCallback);
});
