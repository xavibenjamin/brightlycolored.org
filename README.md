# Brightly Colored

[![Code Climate](https://codeclimate.com/github/smithtimmytim/brightlycolored.org/badges/gpa.svg)](https://codeclimate.com/github/smithtimmytim/brightlycolored.org) [![Issue Count](https://codeclimate.com/github/smithtimmytim/brightlycolored.org/badges/issue_count.svg)](https://codeclimate.com/github/smithtimmytim/brightlycolored.org) [![Front‑End_Checklist followed](https://img.shields.io/badge/Front‑End_Checklist-followed-brightgreen.svg)](https://github.com/thedaviddias/Front-End-Checklist/) [![GitHub contributors](https://img.shields.io/github/contributors/smithtimmytim/brightlycolored.org.svg)]() [![license](https://img.shields.io/github/license/smithtimmytim/brightlycolored.org.svg)]()


*Brightly Colored* is powered by [Jekyll](http://jekyllrb.com/). Feel free to browse the code and report any issues.

You're free to use whatever you'd like, **however**, posts found in the `_drafts` or `_posts` folder are copyright of Timothy B. Smith, and may not be used without proper attribution. Of course, the logo is also my copyright… you know what you can copy/paste and what you shouldn't. Be nice.

## Getting Started

```
$ git clone git@github.com:smithtimmytim/brightlycolored.org.git
$ cd brightlycolored.org
$ bundle install
$ bundle exec jekyll serve -w -o
```

Voilà!

## Contributing

Here are some guidelines for contributing to *Brightly Colored*. First time contributors can open Pull Requests, once you’ve written a few times, I’ll add you as a contributor to this repo.

### Writing CSS

Run the CSSComb profile in each (S)CSS file to make sure it's written according to guidelines. Other than organization of rules, selectors are written in the BEM syntax.

### Writing Posts

Posts are written in two major formats: links and articles. You can distinguish them easily by using the YAML front matter.

```yaml
---
title: "Apple iPhone Touchscreen Faster than Android Devices"
subtitle: Text Here # optional, only available for "post" types

# custom type is either "link" or "post"
custom_type: link # default is "link"

# this is only needed on link posts
link_url: http://venturebeat.com/2013/09/19/apples-iphone-5-touchscreen-is-2-5-times-faster-than-android-devices/

date: 2013-09-23 14:17:25
tags: [ apple, tech ]
---
```

#### Code Samples

Code is written with GitHub Formatted Markdown.

#### Images

Write them using the custom function.

```liquid
{% figure classname path/to/image.png “Caption Goes Here“ %}
```

#### Everything Else

If you need anything else, you can [check the styleguide](https://brightlycolored.org/styleguide/). It’ll give you a good feel for how I use different components on the site.
