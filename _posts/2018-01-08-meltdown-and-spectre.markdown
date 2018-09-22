---
title: Meltdown and Spectre
date: 2018-01-08 09:40:00 -06:00
tags:
- tech
- security
- development
author: tjdraper
link_url: https://stratechery.com/2018/meltdown-spectre-and-the-state-of-technology/
---

Ben Thompson writing about the Meltdown and Spectre processor vulnerabilities:

> Faced with a fundamental imbalance (data fetch slowness versus execution speed), processor engineers devised an ingenious system optimized for performance, but having failed to envision the possibility of bad actors abusing the system, everyone was left vulnerable.

Welcome to networked computing. That describes all of software ever. Developers create systems that are (or that they consider) ingenious and wonderful — systems that can be and are put to fantastic use. Bad actors find ways to poke through security holes we developers never even dreamed of. To be honest, the hacking mindset is so foreign to me, and I imagine to a lot of developers, that it's pretty scary. We just want to make really cool things and humans come along and mess it all up.

But as to the meat of the article:

> Remember, computers are stupid, but they are stupid fast: executing “wear shorts-and-t-shirt” or “wear jeans-and-sweatshirt” takes nanoseconds — what takes time is waiting for the weather observation. So to save time the processor will get you dressed before it knows the weather, usually based on history — what was the weather the last several days? That means you can decide on footwear, accessories, etc., all while waiting for the weather observation. That’s the other thing about processors: they can do a lot of things at the same time. To that end the fastest possible way to get something done is to guess what the final outcome will be and backtrack if necessary.
>
> MELTDOWN
>
> Now, imagine the algorithm was changed to the following:
>
> * Check your manager’s calendar to see if they will be in the office
>     * If they will be in the office, wear slacks and collared-shirt
>     * If they will not be in the office, wear shorts-and-t-shirt
> There’s just one problem: you’re not supposed to have access to your manager’s calendar.

Ben does a fantastic job of breaking this all down into language that's pretty easy to understand. A vulnerability like this is still going to have some nuances that are hard to understand, but if you're remotely interested in tech and/or the Intel architecture vulnerability, I highly recommend this piece.

The take away, as my friend [Kevin Smith](https://twitter.com/_kevinsmith) [loves to point out](https://twitter.com/_KevinSmith/status/948745136237883394), all of modern computing is pretty fragile and it's all held together by metaphorical [duct tape and bailing twine](https://twitter.com/_KevinSmith/status/950110324715409408).
