---
title: Reolink doorbell setup with Scrypted and Homekit
description: A guide on how to setup a Reolink doorbell with Scrypted and Homekit, also includes information on Proxmox LXC Scrypted container setup
permalink: articles/scypted-reolink-doorbell-setup.html
tags: article
keywords: scrypted, reolink, homekit, doorbell, camera, setup, onvif, rtmp, rtsp, hksv, poe
layout: article
date: 2023-04-16
---

I recently purchased a [Reolink Doorbell Camera](https://reolink.com/us/product/reolink-video-doorbell/) because it was pretty cheap, powered over PoE and seem to be well featured (I really wanted the unifi g4 pro but it never seems to be in stock).

I'm running all of my devices through homekit so I wanted to add this camera, based on my research [Scrypted](https://www.scrypted.app/) seemed to be the best way to do this.

Ok here's the steps I took to get this working:

## Setup the Doorbell Camera

1. Setup the doorbell camera using Reolink app
   1. You will need to admin username and password later so remember this
2. Find the IP address of your camera
   1. In the reolink app, click on the gear icon beside your camera name
   2. Tap on the picture of the doorbell at the top of the settings screen
   3. Tap on network
   4. Note the IP Address
3. Open a web browser, type in the IP Address of your camera
4. Enter the username admin and the password you used during camera setup
5. Click the gear icon (top RHS of the screen)
6. Click on Network (LHS) > Advanced (Bottom of the screen) > Port Settings (Scroll down) > Set Up
   1. Turn on HTTP, RTMP, RTSP, ONVIF
7. Click Save

## Install Scrypted

Scrypted has some great [installation guides listed in their documentation](https://github.com/koush/scrypted#installation)

I have Proxmox setup and used the script below to create a new Proxmox VE Scrypted LXC

Run the following command in the Proxmox VE Shell to create a new container:

```bash
bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/ct/scrypted.sh)"
```

## Setup in Scrypted

1. Launch Scrypted
   1. Address is likely https://localhost:10443
2. Click on Plugins (LHS) > Plugin Management > Install
3. Install the following plugins:
   1. ONVIF
   2. Homekit
   3. Rebroadcast (may already be installed)

## Add your camera to Scrypted

1. Click on Plugins (LHS) > Plugins > ONVIF Camera Plugin
2. Under Providing Things, Click Add New
   1. Add your username, password and IP address of the reolink camera
   2. Click create
3. Under Providing Things you should now see "Reolink Video Doorbell PoE"

## Add your camera to Homekit

1. In Scrypted, click Devices (LHS) > HomeKit (Scroll down)
2. Under Compatible Things (RHS, Scroll Down) > Make sure "Reolink Video Doorbell PoE" is Checked

## Add Scrypted to Homekit

1. From your iPhone / iPad, open the Home app
2. Tap on the +, then Add Accessory
3. Scan the Pairing QR code with your phone
4. Accept the warning
5. You should now see the doorbell under cameras in the Home app (and you can setup notifications whe the doorbell is pressed)

Done!
