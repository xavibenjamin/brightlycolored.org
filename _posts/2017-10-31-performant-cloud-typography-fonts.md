---
title: Performant Cloud.typography Fonts
date: 2017-10-31 22:21:00 -05:00
tags:
- development
- web performance
- typography
subtitle: Typography can look great and load at warp speed, Mr. Sulu
custom_type: post
---

I've used fonts from [Cloud.typography](https://www.typography.com/cloud/welcome/) for about two years now. I love Hoefler & Co.'s family of typefaces—this site uses Whitney. But the problem has always been the performance hog these fonts are to serve.

{% include toc.html %}

On most days, it doesn't bother me much because of my high internet speed. That's a very privileged way of thinking, so it was time to fix things. I don't run any analytics here, so I'm not sure how many people visit this site on a slow connection. Really, it doesn't matter. Any one of us can have a slow connection at a moments notice.

## The Solution

I'd done some searching, but I couldn't seem to find an article on how to improve the load time of these fonts. Cloud.typography doesn't load fonts via JavaScript, so it's not as easy as adding the `async` attribute. Also, they don't seem to let you *truly* self-host unless you have a crazy amount of pageviews.

After some digging, I found [loadCSS](https://github.com/filamentgroup/loadCSS), a polyfill from Filament Group to asynchronously load CSS. Perfect! That's exactly what I needed to do.

## How to Implement

We'll do the following:

1. Include loadCSS in our project.
2. Include the Cloud.typography stylesheet in the recommended way
3. Build in a fallback for users that don't use JavaScript

### Adding the Polyfill to Our Project

First, [you need loadCSS](https://github.com/filamentgroup/loadCSS/releases). There a few different ways of including it, but I personally added it to the asset pipeline.

```js
//= require ./vendor/loadCSS.min
//= require ./vendor/cssrelpreload.min
```

### Include the Cloud.typography Stylesheet

Next we'll use the markup that the loadCSS README suggests. Unfortunately, we need this polyfill because `rel="preload"` [doesn't have the greatest browser support](http://caniuse.com/#feat=link-rel-preload) yet.

```html
<link as="style" href="https://cloud.typography.com/[…]/[…]/css/fonts.css" onload="this.rel='stylesheet'" rel="preload" />
```

### Now for a Fallback

Some may not have JavaScript enabled in their browser, so we'll add a fallback just in case.

```html
<noscript>
  <link href="https://cloud.typography.com/[…]/[…]/css/fonts.css" media="screen" rel="stylesheet" type="text/css" />
</noscript>
```

## Show Me Some Stats!

Not a ton of work, right? Now let's take a look at the numbers to see if this helped.

|---
| Page | Internet Speed | DOMContentLoaded | Load |
|-|-|-|-|
| Home (Before) | 110mb/s | 1.10s | 1.10s |
| Home (After) | 110mb/s | 331ms | 1.03s |
| Home (Before) | 3G Slow | 9.35s | 9.35s |
| Home (After) | 3G Slow | 2.50s | 5.29s |
| Article (Before) | 3G Slow | 9.01s | 9.01s |
| Article (After) | 3G Slow | 2.30s | 4.92s |

Just as suspected, the performance improvements are astonishing. This is a huge gain, and I think the difference between someone staying on the site, or leaving.

## The Future

I know there are even more optimizations I can make. I think a ServiceWorker might help. But I don't know enough about it to tinker just yet.

For now, I'm kinda `:shrug:` about the FOUT because there still doesn't seem to be a great way of handling it. Overall however, it's a better experience with faster speeds without sacrificing beautiful type.

---

**Update on 11/01/2017 at 9:31am CDT**: Shout out to [James Dinsdale](https://molovo.co/) who gave me a heads up that I needed to add the `rel="preload"` polyfill script too.
