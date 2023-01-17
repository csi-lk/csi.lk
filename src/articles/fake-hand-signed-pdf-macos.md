---
title: Fake 'hand signed and scanned' PDFs in MacOS
description: Using imagemagick to make it look like a PDF has been printed then hand signed and scanned in MacOS by adding some random artifacts and tilting the page slightly
permalink: articles/fake-hand-signed-pdf-macos.html
tags: article
keywords: mac, os, fake, hand, signed, pdf, image, magic, imagemagick
layout: article
date: 2020-04-09
---

Despite doing all of my signing of PDF's with the preview sign tool sometimes I get asked to provide 'wet' signatures, using `imagemagick` to mess up the PDF a little and make it look like it's been scanned

Install `ghostscript` and `imagemagick`

```bash
brew install gs imagemagick
```

Then run for `input.pdf` (change the name to your file)

```bash
convert -density 150 input.pdf -rotate "$([ $((RANDOM % 2)) -eq 1 ] && echo -)0.$(($RANDOM % 4 + 5))" -attenuate 0.4 +noise Multiplicative -flatten -attenuate 0.03 +noise Multiplicative -sharpen 0x1.0 -colorspace Gray output.pdf
```

Also to note, I think signatures are a stupid way of proving identity and intent in total.

## Further Reading

[Scanner.sh Gist](https://gist.github.com/andyrbell/25c8632e15d17c83a54602f6acde2724)
[FalsiScan](https://gitlab.com/edouardklein/falsisign)
