---
title: Bypass HSTS or EPKP error message in Chrome
description: How bypass HSTS or EPKP error message in Chrome as you may need it for debugging locally by typing thisisunsafe on the error screen
permalink: articles/bypass-hsts-epkp-chrome.html
tags:
  - article
  - short
keywords: 'bypass, hsts, epkp, NET::ERR_CERT_COMMON_NAME_INVALID, chrome, debug'
layout: article
date: 2020-04-02
---

If you also find yourself debugging and need to bypass the HSTS or HPKP error message on Chrome there is no button like https cert failures instead you need to type in:

```
thisisunsafe
```

On the error screen

Should magically let you past issues like

```
NET::ERR_CERT_COMMON_NAME_INVALID
```

_Note: you need to type the characters in specifically, cannot copy / paste_
