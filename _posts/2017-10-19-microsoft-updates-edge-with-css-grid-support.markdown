---
title: Microsoft Updates Edge with CSS Grid Support
date: 2017-10-19 12:25:00 -05:00
tags:
- CSS
- development
- grid layout
custom_type: link
link_url: https://wpdev.uservoice.com/forums/257854-microsoft-edge-developer/suggestions/6514853-update-css-grid
---

This is excellent news. CSS Grid is now in Edge 16. Still no support in IE 11, and I don't see that changing. This puts us in an excellent spot, and opens up the possibilities for a lot more sites. If you've been on the fence, get down from there and start gettin' your toes wet with this stuff.

CSS Grid is ready for production, no matter what you're working on. Remember, even if you need to support older browsers, you can do the following:

```scss
// SCSS
.your-class {
  display: flex;
  // other fallback CSS
  @supports (display: grid) {
    display: grid;
    // other Grid stuff
  }
}
```

Happy Grid-ing!