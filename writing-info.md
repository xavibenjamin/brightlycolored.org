---
title: Contribution Guidelines
permalink: "/contribute/"
layout: page
description: Helpful information for authors or soon-to-be-authors when writing content
  for *Brightly Colored*.
exclude_from_search: true
excerpt: Guidelines for writing on Brightly Colored.
---

First of all, thank you for your interest in contributing! That means a lot. This guide was made to make contributing to *Brightly Colored* easier. If you feel there's something missing here or you have questions, you can send an email to: [smith@ttimsmith.com](mailto:smith@ttimsmith.com?subject=[brightlycolored.org] Question about contributing) or [add an issue to the repo](https://github.com/smithtimmytim/brightlycolored.org/issues/new).

## Getting Setup

If you want to run the site on your local machine, here are the steps to follow.

### Install the Right Version of Ruby

The site currently runs on Ruby `2.3.0`. I recommend using [`rbenv`](https://github.com/rbenv/rbenv) to manage your Ruby versions. [Here are step-by-step instructions](https://github.com/rbenv/rbenv#homebrew-on-macos) to install it via [Homebrew](https://brew.sh/).

### Clone the Repo

```sh
$ git clone git@github.com:smithtimmytim/brightlycolored.org.git
```

### Install Dependencies

```sh
$ gem install bundler
$ bundle install
```

### Start Your Server

```sh
$ bundle exec jekyll serve --limit_posts 10 -o
```

Voilà!

## Writing Article Posts

Include the following information in the YAML front matter when you want to write an article post:

```yaml
custom_type: post
title: "A Brief Review of ‘Star Wars: The Last Jedi’"
# The subtitle is optional, but I usually re-
# commend adding one
subtitle: The latest of the Star Wars saga films is a fresh, new, and exciting chapter of my favorite franchise
# Please visit the Topics page when adding 
# tags. Add tags in lowercase unless
# necessary for the tag
tags: [apple, iPhone, NBA, development]
date: 2018-01-02 22:12 # Publish date in central timezone
```

### Code Samples

Code is written with GitHub Formatted Markdown.

    ```yaml
    review:
      type: movie
      rating: 2.5 # Numbers that are supported are 1-5 and their .5 intervals
      movie:
        director: Rian Johnson
        rating: PG-13 # This is the rating of the movie from the MPAA
    categories: [action, adventure, sci-fi] # Add genres according to IMDB
    ```

### Images

Use the `<figure>` element for images.

```html
{% raw %}<figure class="extendout">
  <img src="{{ site.url }}/path/to/image.jpg" alt="Alt text here">
  <figcaption>Caption here</figcaption>
</figure>{% endraw %}
```

You can find possible photo grid options on the [Style Guide](/styleguide). It'll look something like this:

```html
{% raw %}<figure class="photo-grid photo-grid--three">
  <img src="{{ site.url }}/uploads/2017/12/family-at-the-fair.jpg" alt="Family at the Fair">
  <img src="{{ site.url }}/uploads/2017/12/dawson.jpg" alt="Dawson">
  <img src="{{ site.url }}/uploads/2017/12/friends-at-the-cabin.jpg" alt="Friends at the Cabin">
  <figcaption>Caption for the images goes here.</figcaption>
</figure>{% endraw %}
```

Please put your images in the `uploads` folder. Use the year and month folder that corresponds to the year and month you're publishing in. If not already created, create them. When creating a month folder, always use a leading zero (e.g. `03` for March).

## Writing Link Posts

When writing link posts, include the following YAML front matter:

```yaml
custom_type: link
title: How Apple Watch Saved One Man’s Life — and How It’s Empowering Him After His Heart Attack | 9to5Mac
# URL you're linking to
link_url: https://9to5mac.com/2017/12/15/apple-watch-saves-life-managing-heart-attack/
# Please visit the Topics page when adding 
# tags. Add tags in lowercase unless
# necessary for the tag
tags: [apple, iPhone, NBA, development]
date: 2018-01-02 22:12 # Publish date in central timezone
```

When linking to an article, use the headline of the article with a pipe and the name of the site:

```yaml
title: How Apple Watch Saved One Man’s Life — and How It’s Empowering Him After His Heart Attack | 9to5Mac
```

If the article was written on a personal blog that has no name, then use the headline of the article and attribute the name of the person:

```yaml
title: A Sticky Situation by Ethan Marcotte
```

## Writing Reviews

Reviews are a special type of article post, so you'd add the YAML front matter for an article post. There a few review types supported:

- Movie Reviews
- Product Reviews
- App Reviews
- Album Reviews
- Book Reviews

### Movie Reviews

Include the following YAML front matter when writing a movie review:

```yaml
review:
  type: movie
  rating: 2.5 # Numbers that are supported are 1-5 and their .5 intervals
  movie:
    director: Rian Johnson
    rating: PG-13 # This is the rating of the movie from the MPAA
categories: [action, adventure, sci-fi] # Add genres according to IMDB
```

### Product Reviews

Include the following YAML front matter when writing a product review:

```yaml
review:
  type: product
  rating: 4 # Numbers that are supported are 1-5 and their .5 intervals
  product:
    brand: Sonos # Add brand of the product
  price: 3.99 # Just the number in US Dollars
  url: https://example.com # Include the URL for where to purchase the product
  vendor: Amazon # Where you can buy. Complete the sentence "Buy on …" 
```

### App Reviews

Include the following YAML front matter when writing an app review:

```yaml
review:
  type: app
  rating: 3.5 # Numbers that are supported are 1-5 and their .5 intervals
  app:
    developer: AgileBits
  price: 9.99
  url: https://example.com
  vendor: the App Store # Where you can buy. Complete the sentence "Buy on …" 
```

### Album Reviews

Include the following YAML front matter when writing an album review:

```yaml
review:
  type: album
  rating: 3 # Numbers that are supported are 1-5 and their .5 intervals
  album:
    artist: Drake # Album artist
    favesong: Passionfruit # Your favorite song of the album
categories: [rap, contemporary r&b] # Genres of the album
```

### Book Reviews

Include the following YAML front matter when writing a book review:

```yaml
review:
  type: book
  rating: 3.5 # Numbers that are supported are 1-5 and their .5 intervals
  book:
    author: Rachel Andrew # Book author
  url: https://example.com # URL of where to buy the book.
  vendor: A Book Apart # Where you can buy the book. Complete the sentence "Buy on …"
categories: [rap, contemporary r&b] # Genres of the book
```

## Thank You

Thank you so much for reading this guide. I appreciate you wanting to contribute to *Brightly Colored*. Again, If you feel there's something missing here or you have questions, you can send an email to, send an email to: [smith@ttimsmith.com](mailto:smith@ttimsmith.com?subject=[brightlycolored.org] Question about contributing) or [add an issue to the repo](https://github.com/smithtimmytim/brightlycolored.org/issues/new).
