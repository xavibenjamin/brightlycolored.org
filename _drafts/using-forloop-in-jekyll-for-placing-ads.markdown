---
title: Using forloop in Jekyll for placing ads
date: 2018-09-30 00:14:00 -05:00
tags:
- development
- Jekyll
custom_type: post
---

One of the things I didn't like about the previous version of this site's design was how prominent the ad was on smaller screens. Instead, I wanted to place the ad after the first post on the homepage.

Thankfully, Jekyll (actually, Liquid) allows us to do this with the `forloop` object. There are lots of things you can do with this, so read [the official documentation](https://help.shopify.com/en/themes/liquid/objects/for-loops) if you want to learn more. We'll first setup our post loop:

```html
{% raw %}<ul class="posts">
{% for post in site.posts %}
  <li>
    <span class="post-title">{{ post.title }}</span>
    <span class="post-description">{{ post.excerpt }}</span>
  </li>
{% endfor %}
</ul>{% endraw %}
```

Ok, so this a pretty basic post loop. We're using an unordered list to group our posts. Now, we'll place our ad using `forloop`.

```html
{% raw %}
    …
    <span class="post-description">{{ post.excerpt }}</span>
  </li>
  {% if forloop.first %}
    <! -- put your ad markup in here -->
  {% endif %}
{% endfor %}
</ul>{% endraw %}
```

With this if statement, we're saying that if this is the first item in our loop, then place the ad directly after it. Boom!

Now, our ad integrates better with the content, and is better experience for readers because they're aren't hit with an ad as the first thing they see.

