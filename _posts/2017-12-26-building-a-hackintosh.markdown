---
title: Building a Hackintosh
author: tjdraper
tags: [ apple, mac, macintosh, hackintosh, pc, custom pc build ]
date: 2017-12-26 10:00
---

So I really gave it away in the title, but, uhh, I built a computer. And that computer allegedly runs macOS. Why would I do this? How did I do this? What was my experience like? I intend to answer all these questions my friends.

## Why would I do this?

I have many reasons for doing something like this. Some of them you may agree with and some of them may make you laugh. But they are my reasons and I’m sticking to them.

### I work at a desk

99% of my computer time is spent working at my desk [^standingdesk]. My former workhorse and daily driver, a 2015 15" MacBook Pro, rarely left its customary place to the left of the two desktop computer displays it was connected to. I [wrote before](/2017/03/hot-macbook-pro/) about my laptop overheating issues. The truth is, while that was the most extreme case, my laptops have always run into graphics card burn out issues sooner than I would want or expect. And that's because I mostly use my laptops as desktops. I’ve always done the laptop thing because I do need to have a computer with me when traveling [^traveling]. But it's been apparent to me for some time that what I really need when working at my desk is a desktop computer that is well ventilated with a lot of thermal headroom and more GPU power for my three displays [^spreadoutwork].

[^standingdesk]: I have a standing desk now for health reasons, given that I work probably a good bit more than 8 hours a day.
[^traveling]: In fact, I’m traveling over New Year and I’m very grateful to have a laptop to travel with.
[^spreadoutwork]: I like to spread my work out, okay???

The trouble is that Apple doesn't make a desktop computer I’m interested in and hasn’t for some time. One of my qualifications is for a lot of thermal headroom and a laptop on a stand (iMac) doesn't really meet this qualification. iMacs may be less thermally constrained than the MacBook pros, but they're still quite thermally constrained and they run too hot for my taste. I actually have a friend who has had graphics card fry-age [^technicalterm] issues with iMacs as well.

[^technicalterm]: Technical term

Apple thinks all-in-ones are cool — and they kind of are for consumers. But I’m not a consumer and I want much more thermal headroom (among other things) than the iMac offers if I’m going to have a desktop computer. Apple is now, at the time of this writing, taking pre-orders for the iMac Pro, but the question I like to ask as a professional is why Apple feels this is the right computer for pros? Which of us was asking Apple to seal all the parts in a tight enclosure with a display and make only the RAM upgradable [^ramservice] and do it all at the expense of cooling?

[^ramservice]: The RAM in the iMac Pros is purported to be upgradable, but only by an Apple Authorized service center or Apple itself. There is no RAM door, so you have to take some amount of the computer apart to do it and they are not traditional DIMM slots from what I can glean.

### Cooling

Speaking of cooling, I have yet to get the fans on my new build do more than idle. And I’ve done some stress testing on the CPU and GPU. Because there's lots of room in the case, and because I was able to choose a damn efficient liquid cooler, this baby runs extremely cool. The cooler those parts stay, the more likely they are to operate longer without failure — which is what makes this custom build with lots of airflow and thermal headroom so appealing. When I’m in my office at my desk, I don't need the thing to be as compact as possible. I need it to run as fast as possible and also cool as fast and efficiently as possible. Space is not at a premium and as such we should be able to get much more power and much more cooling out of a desktop configuration.

### Throw-away culture — I don't like it

I’m becoming more and more disillusioned with the throw-away culture of modern computing. There is no part of my MacBook Pro that is upgradable, not even the RAM. I mostly forgive this on laptops like the mentioned MacBook Pro where space is at a premium [^excusingnonupgradeableram] , but I’m at a loss to figure how building a desktop computer in this manner is excusable — particularly for pros. If any part of an iMac (or a MacBook Pro) becomes too outdated, you have to chuck the whole thing and buy an all new one. For the machines I need and want, that comes with a pretty hefty price tag. The displays Apple is making right now are gorgeous. They're also expensive. And unfortunately those displays are attached to expensive parts that age more quickly than the display itself. 16 GB of RAM may be (mostly) adequate now, but those big beautiful retina displays will still be worth using long after that stops being enough RAM. The same things can be said of most of the other computing parts (hard drives/SSD, graphics cards, etc.). As a professional I need and want to upgrade those parts more often than the displays. And at any rate, those computing parts change upgrade needs at different paces. My Hackintosh currently has 32GB of RAM because that felt like the sweet spot for price at this time. The logic board [^motherboard] I chose can max out at 64 GB of RAM, and in a couple years when that's a reasonable price, I’ll gladly swap out my 4 8GB DIMMS for 4 16GB DIMMS because it will be easy and cheap. You can't do that easily on any modern Apple computer, and you can't do it at all on most modern Apple computers. These are not iPhones. I don’t find this excusable.

[^excusingnonupgradeableram]: Though I find the lack of upgradable RAM pretty hard to excuse
[^motherboard]: Motherboard for you PC people

And in 5 or 8 years when I want a better graphics card, I’ll get it and slide it in the PCI Express slot. Or if there's a newer, better standard of PCI available on a new logic board, I’ll get a new logic board too. Because I can.

### Computing Power and Price

The iMac Pros are not widely available yet, and I’m not under any illusion that my custom build will outperform the iMac Pro in any way. However, my Hackintosh outperforms any other Mac in most ways, and certainly in every perceivable way. And I paid a lot less for it than I’ve paid for any Apple computer before. My graphics card is a fairly high-end NVIDIA card with 6GB of video RAM, and it is easily the best performing graphics card I have ever had in a computer. Apple has been having a feud with NVIDIA so you simply can't get an NVIDIA graphics card in any Mac at all since Apple does not sell a Mac that is user expandable in any way. That’s unfortunate for Apple's user-base because NVIDIA is top dog in graphics the majority of the time — and at the time of this writing, that is certainly currently true. Simply put, I was able to build a lot of computer for a lot less money. In the past I’ve always been willing to pay a little bit of Apple premium [^appletax] for computers that just work. But I’ve been finding that position more and more untenable as Apple spends less and less time focusing on its desktop computer users.

[^appletax]: Apple tax, some call it.

### Why a Hackintosh at all?

Why not run Windows or Linux? Before I built my computer, I tried out various flavors of Linux — and Windows for that matter. While there are ways in which each of these systems have some bit or bob that is better than macOS, they still suck majorly in a lot more ways than I’m willing to put up with. macOS has certainly not been getting the attention that it deserves, and frankly, the stuff that's slipping through Apple QA with High Sierra is alarming. But it's still the best (for me anyway) desktop computer OS out there and its the only one I’m willing to live with on a long term basis. At the same time, I want a modular, easily upgradable, high performing, affordable computer. No, not just want, I need (most of) those things. And I’m willing, at least at this time, to put up with just a little bit of software fiddling to get them.

### What About the (Upcoming) Mac Pro

At this point, the upcoming modular and user expandable Mac Pro is still vapor ware. All we know for sure is that Apple said they're working on it and it's coming. We don't know when and we don't know what it will look like. Given that, I have no guarantees that it will be the computer I want. I can tell you I believe it will be at least as expensive as an iMac Pro and I’d be willing to bet all my money it will be less configurable and upgradable than the computer I built. I will not discount the possibility that I will own one in the future, but right now I doubt it.

## How Did I Do this?

So let's talk about how I accomplished this build. I started to get an interest in doing this about a year ago as I heard of more and more people doing it. Then Dan Benjamin did it and put up the [Hackintosh Method](http://hackintoshmethod.com/) website, which I certainly consulted — I sort of used it as a jumping off point, really. Ultimately, I also consulted the [tonymacx86 Buyer's Guide](https://www.tonymacx86.com/buyersguide/december/2017/). This was extremely helpful to compare and choose a few newer and more up-to-date parts since Dan did his build somewhere in the neighborhood of a year ago. Armed with the knowledge from these two websites, here are the parts I built my computer with:

- Processor: [Intel Core i7 6700K 4.00 GHz Unlocked Quad Core Skylake Desktop Processor, Socket LGA 1151](https://www.amazon.com/gp/product/B012M8LXQW)
- Logic Board: [ASRock Z270 KILLER SLI/AC LGA 1151 Motherboard](https://www.amazon.com/ASRock-Z270-KILLER-SLI-Motherboards/dp/B01N6NWA0L)
- RAM: [Ballistix Sport LT 32GB Kit (8GBx4) DDR4 2400 MT/s (PC4-19200) DIMM 288-Pin](https://www.amazon.com/gp/product/B01EIKN3CO)
- CPU Cooler: [Corsair Hydro Series H100i v2 Liquid CPU Cooler](https://www.amazon.com/gp/product/B019EXSSBG)
- Power Supply: [EVGA Supernova G2 850W Fully Modular Power Supply](https://www.amazon.com/gp/product/B00IKDETOC)
- Audio: [	Sabrent USB Audio Card](https://www.amazon.com/gp/product/B002R33VWW)
	- Because, at least at this time, though macOS seems to recognize the logic board's onboard audio interface, I can't get any sound to come out of it (nobody said this build would be without gotchas)
- Bluetooth: [IOGEAR Bluetooth 4.0 USB Micro Adapter](https://www.amazon.com/gp/product/B007GFX0PY)
	- Because, at least at this time, macOS and the onboard bluetooth on the logic board don't get along great. It works sometimes, but other times not. This device works flawlessly so far.
- Wi-Fi: [TP-Link Wireless Dual Band PCI Express Adapter](https://www.amazon.com/gp/product/B007GMPZ0A)
	- Again, at least at this time, macOS does not have the appropriate drivers for the on-board wi-fi at all.
- SSD: [Samsung 850 EVO 250GB 2.5-Inch SATA III Internal SSD](https://www.amazon.com/gp/product/B00OBRFFAS)
- Graphics: [EVGA GeForce GTX 1060 GAMING, ACX 2.0 (Single Fan), 6GB GDDR5, DX12 OSD Support (PXOC)](https://www.amazon.com/gp/product/B01IPVSGEC)
	- This graphics card is amazing — at least to me.
- Case: [Corsair Obsidian Series Black 450D High Airflow Mid-Tower Computer Case](https://www.amazon.com/gp/product/B00I6BJ8MQ)
	- I still gravitate (generally) toward Apple hardware design aesthetics. This case falls short of what I consider real beauty, but it's also not offensive and it does have really effective airflow.

### Trouble Along the Way

Now, it should be noted that this is the final list of components that comprise my custom build at the time of this writing. However (mostly because it was my first build) there were some bumps along the way.

#### Logic Board

The original logic board I ordered and assembled the computer with was the [ASUS Z170-AR](https://www.amazon.com/gp/product/B013KS5TAE). I’m sure it's a fine logic board but I never got to find out. Though I was very careful and wore my static wrist strap anchored to the computer at all times, the logic board was either damaged by me on installation, or it was defective. In either case, the result was the same. Though the logic board would show a single LED light when the power supply was turned on, and though it would supply power to the fans, it would not boot. It would not even [POST](https://en.wikipedia.org/wiki/Power-on_self-test). Nothing. It was just completely dead. Because of my inability to determine exactly what was going on, I decided to take it to a local computer shop for diagnostics and they informed me after their diagnostics that it was a bad logic board. I asked if I damaged it or if it was defective. They said it was hard to tell and they saw no "smoking gun" pointing out damage by me but that they also rarely see defective logic boards from ASUS. I haven't yet tried to return it, but I may and we'll see what happens then. So at this point, I still don't know if it was me or not that caused the issue. In any event, this little computer shop was familiar with Hackintosh builds and recommended the ASRock Z270 KILLER SLI/AC logic board. Since it was already in the shop, and it was only an additional $70, I had them install that board (I had already disassembled and assembled the build several times at this point trying to figure out what was wrong and I was just done doing that).

After getting my new build back from the local computer shop, the hardware and logic board all seemed in good shape — it would POST at least — so it was now time for the hard part, installing macOS on non-Apple hardware.

### Installing macOS

The thing to know about working with macOS on non-Apple hardware is that macOS is built for the hardware Apple knows it supports. Unlike Windows (or Linux, but mostly Windows), Apple does not attempt in any way to make sure macOS supports the wide range of available hardware out there. In addition, macOS expects certain things to be present in the firmware of the logic board, etc.

Fortunately at this stage in the life of the Hackintosh community, installing macOS on hardware from the tonymacx86.com buyer's guide is not all that difficult. I did have to take a run at it twice. The first time around I followed [this guide for installing Sierra on supported Intel-based PCs](https://www.tonymacx86.com/threads/unibeast-install-macos-sierra-on-any-supported-intel-based-pc.200564/) [^sierra]. This guide almost worked. Almost.

[^sierra]: Yes, Sierra. I’m not yet willing to touch High Sierra with a 10 foot pole yet.

At first I had trouble getting past the Apple Logo when booting from the USB installer I created. The Apple Logo would come up on a black screen, the progress bar would appear, and then there would be no progress. I waited for 10 minutes once to make sure it was actually stuck. I eventually found instructions that worked for me where I would go into the Clover Bootloader settings and select, "Fix USB Ownership" before booting every time, and boot would proceed as normal.

Unfortunately, there were still a lot of other weird issues and I finally started over with [this guide on Installing Sierra On 200 Series With KabyLake Processor](https://www.tonymacx86.com/threads/updated-for-multibeast-9-2-1-and-sierra-10-12-6-sierra-on-200-series-with-kabylake-processor.218494/) even though I have a Skylake processor. Because I have a 200 series board, this guide worked perfectly fine for me and I ran into (almost) no trouble this time around [^kernelpatches].

[^kernelpatches]: I think the big difference was the kext kernel patches for making macOS play nicely with the 200 series board. Additionally, the NVRAM option solved some boot trouble I was having I believe.

### iMessage

The very hardest part of this entire thing was getting iMessage working.

I could write a very long screed about what hot garbage the architecture of iMessage must be… actually, I think I will write that screed. I’m a software developer, and if I released software as finicky as iMessage, I would be out of a job.

After the amount of work I put in to getting iMessage working on this computer I believe I have a greater understanding of why iMessage breaks sometimes for no explicable reason on legitimate Apple hardware. I actually love what iMessage offers in terms of being able to send and receive message on my Mac with a real keyboard without having to pick up my phone in conjunction with the ability for Mac Messages to receive and reply to actual SMS text messages from my phone through the cell network. To me, while not 100% necessary for me to get on with my life on a Hackintosh, I did very much want to get this functionality working. Boy did it take blood, sweat, and tears.

You see, as best I can tell, and certainly from the mountain of evidence working through the guides and FAQs for getting iMessage working on non-Apple hardware, it seems that an identity is not generated when you sign in to iMessage by Apple's server, but it relies on a number of parameters set in the Macintosh's firmware including the machine's serial number, board serial number, product identifier, and apparently the ethernet's MAC address (or if you have a Macintosh that is ethernet-less, the wi-fi MAC address). And that ethernet port must be set as en0 in the system's network configuration. All of this comprises the system identity for unique delivery of messages to the correct place.

If you're a software developer, I probably don't have to tell you how horrifying this is. If you're not, there's probably not a lot I can say to really make you understand. Do you remember a few years ago when people were getting iMessages sent to someone else's Apple ID or number? I’d be willing to bet a very large sum of money that this insane system identification system is to blame for that. I’d also be willing to bet that this insane architecture is part of the reason why it's taken so long for iMessage to come to the cloud and why that feature was yanked from iOS 11. De-tangling this nightmare obviously takes some doing. If only there was a way of assigning a unique ID in software… OH WAIT! Why the sam-holy-hill Apple's servers don't assign a unique ID when a user signs in with the correct Apple ID credentials is beyond my ability to comprehend.

So to get iMessage working, I used [An iDiot's Guide to iMessage](https://www.tonymacx86.com/threads/an-idiots-guide-to-imessage.196827/). It seemed to work at first, but I started to notice weird issues after re-boot. Sometimes I could send and receive messages, sometimes I could only receive, sometimes I could only send. And other times, iMessage seemed to be completely broken on my new Hackintosh. I was crushed. It's one of my favorite "nice-to-have" features of being on macOS.

After a few days, I decided to go through the guide again very carefully. One of the problems is that the guide was written for a previous version of [Clover Configurator](https://www.tonymacx86.com/resources/clover-configurator.335/). Because of that, they reference a "Magic Wand" tool in the SMBIOS utility which no longer exists. This is where I flubbed it up the first time when I did the best I could to interpret the instructions. The long and short of it is that, because I flubbed it up, a Board Serial Number was never set. This caused my system identification to iMessage to be wonky I guess. In any event, I signed out of all iCloud services, rebooted, deleted a bunch of preference files, rebooted, ran through the Cover Configurator steps again, making sure to click generate on the serial number several times (which generated the Board Serial Number this time, though I don't know why it didn't the first time), and generally ran through that guide again very carefully. The result seems to be a completely stable iMessage (at least it's been stable for several days, no issues).

## Is it worth it? Do I Recommend It For Others?

### Performance

It's early days so it's hard to answer that definitively. So far, now that things are running smoothly, I love this computer. It definitely feels like the fastest "Mac" I’ve ever used [^graphicscard].

[^graphicscard]: Probably no small thanks to the killer graphics card I have and the 32 Gigs of RAM which in my monitoring with a lot of memory hungry apps open I have yet to come anywhere near touching.

One of the things I like to do on any new system is stress test with [HandBrake](https://handbrake.fr/). I find this to be really telling about the performance capabilities of my new computer because HandBrake is great at maxing out all the cores of processor. If you open up the CPU Core monitor in Activity Monitor, you can see that any time HandBrake is encoding, all the cores are maxed out. On my past Macs, the computer gets pretty sluggish while this task is going on. On this new Hackintosh, not only did it not take a long time to do some encoding, but the computer felt completely normal while this was happening. And my fans never did more than idel — whereas on my laptop, the fans scream when HandBrake is encoding.

As a PHP developer, I also use PHPStorm, which I have a love/hate relationship with. The love aspect is that it's a great IDE for PHP in terms of knowing about and navigating a project. The hate aspect is it's a performance dog. When indexing, or with very large projects, it can bring my laptop to its knees. Testing with some projects or with indexing that cripples my laptop, this machine barely feels like it's working.

Also, while I’m not much of a computer gamer, I do love to play Portal occasionally. So of course I fired up Steam and Portal — which normally, again, make my laptop beg for mercy. I cranked up the frame write, the resolution, and generally did everything I could to make my new Hackintosh angry with me. It never even broke a sweat.

So performance is one aspect of looking at this, and it's great.

### Money

The other aspect is that I have somewhere in the neighborhood of $2,100 in this computer. As a professional, it's the most power for the least amount of money I’ve ever had. It's really nice. In day-to-day use, it still feels like using a Mac (now that everything is set up, of course).

### Can Be Fiddly

As you will note if you read through all of my article thus far, it can be a little fiddly to get stuff to work. It hasn't been fiddly since getting things set up, but updates can be fiddly too. You have to make sure you turn off auto-updates and read up on the updates. WAIT to update. Make sure tonymacx86 has written about the update. Make sure all your drivers are compatible, etc. This is particularly true if you are using NVIDIA graphics cards like I am. The NVIDIA drivers are macOS build specific [^graphicsupdatesnotnew]. When an update first comes out, it will take a week or three for the NVIDIA drivers to be updated. So the point is that Hackintoshes come with a bit of a Maintenance tag that real Macintoshes do not. It's a trade off you have to be willing to make. In other words, you have to be a nerd like me.

[^graphicsupdatesnotnew]: This is actually not new. At the film company where I used to work, we had a high end NVIDIA card of some kind in the big MacPro and even though it was a legit Mac Pro, because of that aftermarket NVIDIA graphics card, we had to be careful with OS X updates.

### Recommend?

A qualified "yes" so far. If you love tinkering, you love the idea of building a computer, of replace individual parts as they become outdated, and you're not afraid to dive in and troubleshoot. Yes. Build a Hackintosh. I found it a very fulfilling experience, and I’m still finding it rewarding. If any of that scares you, stay away. Stay far away.

Remember too that, what the future holds for the Mac is uncertain. We're seeing Apple embrace a path for the Mac with things like the [T2 controller](https://www.macrumors.com/2017/12/14/imac-pro-has-t2-chip-with-secure-boot/) that may make future macOS compatibility with Hackintosh systems less tenable. Then again, maybe not. We just don't know. It's working great for me right now, and I would do it again if I had to start over and make the decision again armed with all my knowledge I have at this stage. And regardless of the future, maybe that's enough for you. It's certainly enough for me.