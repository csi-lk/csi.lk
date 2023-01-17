---
title: My MacOS Setup
description: My setup of everything on my home and work Macbooks, I keep this list to help me remember what I have installed and to help me set up new Macs
permalink: articles/my-macos-setup.html
layout: article
date: 2019-06-28
tags: article
keywords: macos, setup, apps, mac, os, front, end, developer
---

As a contract front end developer I find myself setting up MacOS laptops quite often, here's my setup of everything on my home and work Macbooks (constantly updated)

## Browsers

### Safari (dev)

    * Ublock Origin
    * 1password
    * vimari
    * Reddit enhancement suite

### Chrome (dev)

    * Ublock Origin
    * 1password
    * Disconnect
    * Vimium
    * HTTPS Everywhere
    * Imagus
    * Reddit Enhancement Suite
    * The Great Suspender

### Firefox (main)

    * 1password
    * CanvasBlocker
    * Cookie AutoDelete
    * Dark Reader
    * hooktubify
    * https everywhere
    * qbserve
    * redux detools
    * uBlock Origin
    * Vimium

### Internet Explorer (test)

- 10, 11, Edge Win VMs
  _ [Virtualbox](https://www.virtualbox.org/wiki/Downloads)
  _ [IEVms](https://github.com/xdissent/ievms)
  _ Run `curl -s https://raw.githubusercontent.com/amichaelparker/ievms/master/ievms.sh | env IEVMS_VERSIONS="10 11 EDGE" bash`
  _ It will fail wanting you to accept license terms
  _ `VBoxManage extpack install /Users/csilk/.ievms/Oracle_VM_VirtualBox_Extension_Pack-` (tab to auto complete then enter) then accept licence terms
  _ Run 1 again
- [Edge Preview (chromium)](https://apps.apple.com/us/app/microsoft-edge/id1288723196)

### iOS Simulator (test)

Comes with Xcode, used for mobile safari testing (usually emulated in Chrome is fine but sometimes is needed)

## Productivity

### Alfred with Powerpack

The nerve center for my setup, allows me to automate / get quick access to a ton of stuff

**Settings**

- CMD+Space hotkey (needs to be turned off in Keyboard Shortcuts > Spotlight)
- Disable bad web searches
- Add custom searches
  _ Stackoverflow
  _ URL - [http://stackoverflow.com/?q={query}](http://stackoverflow.com/?q=%7Bquery%7D)
  _ Keyword - so
  _ Icon [https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png?v=c78bd457575a](https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.png?v=c78bd457575a)
- Setup fallback results for search engine to be
  _ Duck Duck Go
  _ Stackoverflow \* Amazon UK

**Workflows**

- Dash workflow for quick documentation lookup (built into dash)
- Lorem - [https://github.com/tillkruss/alfred-lorem-ipsum/releases](https://github.com/tillkruss/alfred-lorem-ipsum/releases)
- Fakerum (generate fake data) - [https://github.com/deanishe/alfred-fakeum/releases](https://github.com/deanishe/alfred-fakeum/releases)
- Process killer - [https://github.com/ngreenstein/alfred-process-killer](https://github.com/ngreenstein/alfred-process-killer)
- Encode and Decode - [https://github.com/willfarrell/alfred-encode-decode-workflow](https://github.com/willfarrell/alfred-encode-decode-workflow)

### Marta file manager

(to replace finder)

[https://marta.yanex.org](https://marta.yanex.org/)

My Config - [https://gist.github.com/csi-lk/8505fb12052151ef27a16df4a3e40d3b](https://gist.github.com/csi-lk/8505fb12052151ef27a16df4a3e40d3b)

Then kill Finder as I rarely need it - [https://apple.stackexchange.com/questions/274745/why-is-the-finder-app-always-open#274748](https://apple.stackexchange.com/questions/274745/why-is-the-finder-app-always-open#274748)

`defaults write com.apple.finder QuitMenuItem -bool YES`

`killall Finder`

### Things 3 (todo list)

[Mac App store - Things 3](https://apps.apple.com/us/app/things-3/id904280696?mt=12)

Love the UI and the way it syncs with my other iDevices

### Qbserv

[https://qotoqot.com/qbserve/](https://qotoqot.com/qbserve/)

Automated time tracker that focuses on Productivity rather than time

### FS Notes

[Fsnotes](https://fsnot.es/)

Currently migrating away from [Notion](https://notion.so)

My new favourite note taking app that stores in plaintext on iCloud drive

Syncs with iOS app

### SnippetsLab

[Renfei SnippetsLab](https://www.renfei.org/snippets-lab/)

Where I store code snippets

Choose SnippetsLab > Install Alfred Workflow from the menubar

### GifFox

[Giffox](https://gifox.io/)

Free software to create gifs easily that are sharable on Slack or imgur

## Development

This is my default coding environment for mainly Front End development

### Dash

Quick dev docs lookup that hooks direclty into Alfred

### iTerm 2

[iTerm 2](https://iterm2.com/)

Setup with [Monokai Soda Colors](https://github.com/mbadolato/iTerm2-Color-Schemes)

### VSCode

[Visual Studio Code](https://code.visualstudio.com/download)

Note: i'm going to try going back to Sublime Text, as VSCode is too slow for me at the moment

- Use [sync-settings](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync) with [this gist](https://gist.github.com/csi-lk/8bf890e8abbaca38c38e9beb247cc52c)

### Javascript Env

- NodeJS
  _ NPM
  _ Yarn \* Use `npm-merge-driver` for auto merging conflicts in `yarn.lock`
  `npx npm-merge-driver install \ --driver-name yarn-merge-driver \ --driver "npx npm-merge-driver merge %A %O %B %P -c yarn" \ --files yarn.lock`

### Sublime Text

- Themes
  _ [https://packagecontrol.io/packages/Monokai _ Spacegray](https://packagecontrol.io/packages/Monokai%20-%20Spacegray)
  _ [https://packagecontrol.io/packages/Material Theme](https://packagecontrol.io/packages/Material%20Theme)
  _ Add `subl` to path with \* [https://stackoverflow.com/questions/16199581/open-sublime-text-from-terminal-in-macos](https://stackoverflow.com/questions/16199581/open-sublime-text-from-terminal-in-macos)

### CLI tools

- [brew](https://brew.sh/) because of course
- [Git Goodies](https://github.com/csi-lk/gg) forked to add my own commands and speed up git workflow
- [thefuck](https://github.com/nvbn/thefuck) `brew install thefuck` autocorrects your last failed input

## Utilities

### Spectacle

[Spectacle App](https://www.spectacleapp.com/)

Setup hotkeys for window Management

### MenuMeters

[https://member.ipmu.jp/yuji.tachikawa/MenuMetersElCapitan/](https://member.ipmu.jp/yuji.tachikawa/MenuMetersElCapitan/)

Shows quick CPU, Network and RAM information in the MenuBar

### Hazel

[Noodlesoft - Hazel](https://www.noodlesoft.com/)

Automated file operations, stored in iCloud drive that sync across devices

### Bartender

[Mac Bartender](https://www.macbartender.com/)

To hide all the menubar icons that I don't need quick acess to

### Dockey

[http://dockey.publicspace.co/](http://dockey.publicspace.co/)

Change dock preferences to always hide quick as possible show

### Amphetamine

[Amphetamine (Mac Store)](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12)

Much like the older caffine but way better, keeps your mac from sleeping

### DaisyDisk

Note: I didn't know this at the time but you can use [GrandPerspectiv](http://grandperspectiv.sourceforge.net) for a free alternative

### ImageOptim

- [ImageOptim](https://imageoptim.com/mac)

## Design

### Figma

[Figma](https://www.figma.com/downloads)

Great sketch replacement

### Pixelmator

For photoshop esque things that need to be done, I have a lifetime version given away in an old 'maclife' magazine that i've been using for years

## Communication

### Slack

[Slack](https://slack.com/downloads/osx)

Darkify with [Slack Dark Mode](https://github.com/LanikSJ/slack-dark-mode) (works after 4.0+ update)

### WhatsApp

Found on mac app store

## Media

### IINA

[IINA](https://iina.io/)

Plays everything but looks good, prefer it to VLC on mac then associate it with all movie formats

### Spotify

[Spotify](https://www.spotify.com/us/download/mac/)

Can't dev without music

## Fonts

### Fontbase

[Fontbase](http://fontba.se/)

Missing font manager that lets you quick preview etc.

### Web Font Load

[Web-Font-Load](https://github.com/qrpike/Web-Font-Load)

```
curl https://raw.githubusercontent.com/qrpike/Web-Font-Load/master/install.sh | sh
```

Installs all google fonts locally for design

## Entertainment / Fun

### Battle.net

[Battle.net](https://www.battle.net/download/getInstallerForGame?os=mac&locale=enUS&version=LIVE&gameProgram=BATTLENET_APP)

Because I play a lot of Hearthstone

### Plex

[Plex](https://www.plex.tv/downloads/)

I have a plex server on a mac mini at home that I use often

### Open Emu

[Open Emu](http://openemu.org/)

Because I love playing banjo kazooie over and over again

### Paprika

[Paprika (App Store)](https://apps.apple.com/us/app/paprika-recipe-manager-3/id1303222868)

Where I keep all my recipies, have been using this for years, well worth the sticker price
