---
title: 8BitDo N30 Pro - iOS
description: How to use the 8BitDo N30 / F30 Pro controller with iOS by downgrading the firmware
permalink: articles/8bitdo-n30-ios.html
tags: article
keywords: 8bitdo, n30, ios, delta, emulator, f30, iphone, controller, 8bit, ipad, n64, gba
layout: article
date: 2019-10-22
---

_TL;DR [Download firmware](https://download.8bitdo.com/Firmware/Controller/N30pro+F30pro/N30pro+F30pro_Firmware_Legacy_V2.00.zip), flash (power+pair), connect, map_

Wanted to use the [Delta emulator](https://github.com/rileytestut/Delta) from [AltStore](http://altstore.io) on my iPhone and had an old [8BitDo N30 Pro controller](https://www.8bitdo.com/n30pro-f30pro/) lying around.

This turned into a bit of a journey to get it to work:

- [Figured out I needed to downgrade](https://www.reddit.com/r/8bitdo/comments/6gha7g/please_help_with_osx_and_ios_nes30_pro/) the firmware of the controller to v2.0
- [Download the legacy firmware](https://download.8bitdo.com/Firmware/Controller/N30pro+F30pro/N30pro+F30pro_Firmware_Legacy_V2.00.zip) from the [8BitDo Support page](https://support.8bitdo.com)
- [Hold the power and pair butons for 3-4 seconds](https://www.reddit.com/r/RetroPie/comments/5d0fkk/8bitdo_nes30_pro_cannot_get_it_to_enter_firmware/) then let go to allow the controler to enter firmware update mode
- Update the firmware using the downloaded app (should only take 30seconds)
- Find the [old manual](http://download.8bitdo.com/Manual/FC30_Pro_Manual_ENG_v1.0.pdf) telling you to turn it on using _Power + B_
- Connect via bluetooth
- Map the controls (Settings > Controllers > Keyboard > x)

Enjoy!

Moving forward I hope they offer iOS13 support, there seems to be a lot of [communication with the 8BitDo guys on the subreddit](https://www.reddit.com/r/8bitdo/search/?q=ios&sort=new&restrict_sr=on) but I wouldn't hold my breath
