---
---
{% capture scripts %}
  {% include javascripts/newsletter.js %}
  {% include javascripts/heading-anchors.js %}
  {% include javascripts/group-list.js %}
  {% include javascripts/mobile-menu.js %}
  {% include javascripts/table-of-contents.js %}
{% endcapture %}
{{ scripts | strip }}
