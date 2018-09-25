---
title: Fix Broken Images from Siteleaf
date: 2018-09-24 21:41:00 -05:00
tags:
- development
custom_type: post
---

I recently started using Siteleaf to manage this site, and I had an issue with image uploads. Siteleaf puts images in an `_uploads` folder that Jekyll doesn't output by default.

To fix that, put the following in your `_config.yml` file:

```yaml
collection:
  uploads:
    title: Uploads
    output: true
```

Voilà! Images work now.